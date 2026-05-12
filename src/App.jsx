import { ThemeProvider } from '@zendeskgarden/react-theming'
import { TopBar, MainNav } from 'zendesk-globalnav-template'
import styled from 'styled-components'
import CustomerListsPage from './components/CustomerListsPage'
import './App.css'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #f8f9f9;
  position: relative;
  isolation: isolate;
  overflow: hidden;
`

const ContentRow = styled.div`
  display: flex;
  flex: 1;
  min-height: 0;
  width: 100%;
  z-index: 1;
  overflow: hidden;
`

const MainContent = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0px;
  margin-top: 4px;
  isolation: isolate;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(10, 13, 14, 0.16);
  border-radius: 8px 0px 0px 0px;
  flex: 1;
  align-self: stretch;
  overflow: hidden;
  min-height: 0;
`

function App() {
  return (
    <ThemeProvider>
      <PageContainer>
        <TopBar currentProduct="support" onProductChange={() => {}} />
        <ContentRow>
          <MainNav
            currentProduct="support"
            activeNavItem={2}
            setActiveNavItem={() => {}}
            isSubnavExpanded={false}
            setIsSubnavExpanded={() => {}}
          />
          <MainContent>
            <CustomerListsPage />
          </MainContent>
        </ContentRow>
      </PageContainer>
    </ThemeProvider>
  )
}

export default App
