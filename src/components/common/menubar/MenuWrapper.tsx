import React, { FC } from 'react';

import styled from '@emotion/styled';
import themes from 'themes';

import { Menu } from 'antd';

type MenuWrapperProps = {
  className: string;
};

const MenuWrapper = styled(Menu)`
  border-bottom: none;
  line-height: 4.6;

  .ant-menu-item-selected,
  .ant-menu-item-active:hover {
    border-bottom: 2px solid ${themes.color.pink};

    a {
      color: ${themes.color.pink};
    }
  }

  .ant-menu-item {
    a:hover {
      color: ${themes.color.pink};
    }
  }
`;

const MenuWrapperComponent: FC<MenuWrapperProps> = ({
  className,
  children,
}) => (
  <MenuWrapper className={className} mode="horizontal">
    {children}
  </MenuWrapper>
);

export default MenuWrapperComponent;
