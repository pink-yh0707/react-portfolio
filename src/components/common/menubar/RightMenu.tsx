import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import MenuWrapper from 'components/common/menubar/MenuWrapper';
import paths from 'paths';

import themes from 'themes';
import { Menu, Icon } from 'antd';

const RightMenu: FC = () => (
  <MenuWrapper className="right-menu">
    <Menu.Item key={paths.about}>
      <Link to={paths.about}>
        <Icon type="profile" twoToneColor={themes.color.pink} />
        About
      </Link>
    </Menu.Item>
    <Menu.Item key={paths.works}>
      <Link to={paths.works}>
        <Icon type="book" twoToneColor={themes.color.pink} />
        Works
      </Link>
    </Menu.Item>
    <Menu.Item key={paths.contact}>
      <Link to={paths.contact}>
        <Icon type="contacts" twoToneColor={themes.color.pink} />
        Contact
      </Link>
    </Menu.Item>
  </MenuWrapper>
);

export default RightMenu;
