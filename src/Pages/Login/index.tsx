import { Button } from "../../styles/Button";
import { Container,Logo } from "./styles";
import MBStock from "./../../../public/MBStock.svg"


export const Login = () =>(
    <>
        <Logo src={MBStock}/>    
        <Container>

 
            <input placeholder="Nome de usuário ou e-mail"></input>


            <input placeholder="Senha"></input>


            <Button variant="primary" >   
                ENTRAR        
            </Button>


            <pContainer>
                <p>Não possui acesso? Crie aqui!</p>
                <p>Esqueci a minha senha</p>
            </pContainer>

        </Container>
    </>

)