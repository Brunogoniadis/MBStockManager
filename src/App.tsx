import GlobalStyle from "./GlobalStyle"
import { Main } from "./styles/Main"
import { Container } from "./components/FormInitialPage/styles"


export const App = () => {
  return(
    <>
      <GlobalStyle/>
        <Main>
        <h1>MBStock</h1>
        
          <Container></Container>
        </Main>
    </>
  )
}