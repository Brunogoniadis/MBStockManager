import GlobalStyle from "./GlobalStyle"
import { Main } from "./styles/Main"
import { Login } from "./Pages/Login"
import { Register } from "./Pages/Register"

export const App = () => {
  return(
    <>
      <GlobalStyle/>
        <Main>

        <Register></Register>
        </Main>
    </>
  )
}