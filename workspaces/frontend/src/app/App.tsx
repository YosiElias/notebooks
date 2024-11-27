import * as React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import './app.css';
import {
  Flex,
  Masthead,
  MastheadContent,
  MastheadToggle,
  Page,
  PageToggleButton,
  Title,
} from '@patternfly/react-core';
import { BarsIcon } from '@patternfly/react-icons';
import { NamespaceProvider } from './context/NamespaceContextProvider';
import NamespaceSelector from '../shared/components/NamespaceSelector';
import AppRoutes from './AppRoutes';
import NavSidebar from './NavSidebar';

const App: React.FC = () => {
  const masthead = (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton
          id="page-nav-toggle"
          variant="plain"
          aria-label="Dashboard navigation"
        >
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>

      <MastheadContent>
        <Flex>
          <Title headingLevel="h2" size="3xl">
            Kubeflow Notebooks 2.0
          </Title>
          <NamespaceSelector />
        </Flex>
      </MastheadContent>
    </Masthead>
  );

  return (
    <NamespaceProvider>
      <Page
        mainContainerId="primary-app-container"
        masthead={masthead}
        isManagedSidebar
        sidebar={<NavSidebar />}
      >
        <AppRoutes />
      </Page>
    </NamespaceProvider>
  );
};

export default App;
