import React, { FC, useState } from 'react';
import LeftMenu from 'components/common/menubar/LeftMenu';
import RightMenu from 'components/common/menubar/RightMenu';
import DrawerMenu from 'components/common/menubar/DrawerMenu';

import styled from '@emotion/styled';
import theme from 'themes';
import { Button, Icon, Layout } from 'antd';

const { Header } = Layout;

const NavBar = styled(Header)`
  background-color: transparent;
  display: flex;
  justify-content: space-between;

  @media (max-width: 764px) {
    justify-content: flex-end;

    .left-menu,
    .right-menu {
      display: none;
      float: none;
    }
  }
`;

const DrawerButton = styled(Button)`
  display: none;
  margin-top: 1.4rem;

  .ant-btn:hover,
  .ant-btn:focus {
    border-color: ${theme.color.pink};
    color: ${theme.color.pink};
  }

  @media (max-width: 764px) {
    display: inline;
  }
`;

const NavigationBar: FC = () => {
  const [visivle, setVisivle] = useState();
  const showDrawer = () => setVisivle(true);
  const closeDrawer = () => setVisivle(false);

  return (
    <NavBar>
      <LeftMenu />
      <RightMenu />
      <DrawerButton onClick={showDrawer}>
        <Icon type="menu" />
      </DrawerButton>
      <DrawerMenu closeDrawer={closeDrawer} visivle={visivle} />
    </NavBar>
  );
};

export default NavigationBar;
