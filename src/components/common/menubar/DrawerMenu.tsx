import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import paths from 'paths';

import styled from '@emotion/styled';
import themes from 'themes';
import { Drawer, Menu, Icon } from 'antd';

type DrawerMenuProps = {
  closeDrawer: () => void;
  visivle: boolean;
};

const DrawerMenuWrapper = styled(Drawer)`
  line-height: 4.6;

  .ant-menu {
    border-right: none;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: transparent;

    a {
      color: ${themes.color.pink};
    }
  }

  .ant-menu-item::after {
    background-color: transparent;
    border-right: 2px solid ${themes.color.pink};
  }
`;

const DrawerMenu: FC<DrawerMenuProps> = ({ closeDrawer, visivle }) => {
  return (
    <DrawerMenuWrapper
      width="212"
      placement="left"
      closable={false}
      onClose={closeDrawer}
      visible={visivle}
    >
      <Menu mode="inline">
        <Menu.Item key={paths.home}>
          <Link to={paths.home}>
            <Icon type="home" />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key={paths.about}>
          <Link to={paths.about}>
            <Icon type="profile" />
            About
          </Link>
        </Menu.Item>
        <Menu.Item key={paths.works}>
          <Link to={paths.works}>
            <Icon type="book" />
            works
          </Link>
        </Menu.Item>
        <Menu.Item key={paths.contact}>
          <Link to={paths.contact}>
            <Icon type="contacts" />
            Contact
          </Link>
        </Menu.Item>
      </Menu>
    </DrawerMenuWrapper>
  );
};

export default DrawerMenu;
