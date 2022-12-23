import { Container,Logo } from "./styles";
import MBStock from "./../../../public/MBStock.svg"


export const Login = () =>(
    <>
        <Logo src={MBStock}/>    
        <Container>

            <p>Não possui acesso? Crie aqui!</p>
            <p>Esqueci a minha senha</p>
        </Container>
    </>

)