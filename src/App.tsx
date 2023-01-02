import GlobalStyle from "./GlobalStyle"
import { Main } from "./styles/Main"
import { Login } from "./Pages/Login"
import { Register } from "./Pages/Register"
import { RoutesMain as Routes } from "./routes";



export const App = () => {
  return(
    <>
      <GlobalStyle/>
        <Main>
          <Routes/>
        </Main>
    </>
  )
}