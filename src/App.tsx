import React, { FC } from 'react';
import styled from '@emotion/styled';

import { Layout } from 'antd';
import NavigationBar from 'components/common/menubar';

const { Content, Footer } = Layout;

const PageWrapper = styled(Layout)`
  background-color: transparent;
`;

const App: FC = () => {
  return (
    <PageWrapper>
      <NavigationBar />
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </PageWrapper>
  );
};

export default App;
