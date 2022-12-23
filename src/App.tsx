import GlobalStyle from "./GlobalStyle"
import { Main } from "./styles/Main"
import { Login } from "./Pages/Login"


export const App = () => {
  return(
    <>
      <GlobalStyle/>
        <Main>

        <Login></Login>
        </Main>
    </>
  )
}