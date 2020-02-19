import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import MenuWrapper from 'components/common/menubar/MenuWrapper';
import paths from 'paths';

import themes from 'themes';
import { Menu, Icon } from 'antd';

const LeftMenu: FC = () => (
  <MenuWrapper className="left-menu">
    <Menu.Item key={paths.home}>
      <Link to={paths.home}>
        <Icon type="home" twoToneColor={themes.color.pink} />
        Home
      </Link>
    </Menu.Item>
  </MenuWrapper>
);

export default LeftMenu;
