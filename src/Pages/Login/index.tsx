import { Button } from "../../styles/Button";
import { Container,Logo } from "./styles";
import MBStock from "./../../../public/MBStock.svg"
import { Input } from "../../components/Input";


export const Login = () =>(
    <>
        <Logo src={MBStock}/>    
        <Container>

 
        <Input
                id='email'
                label='E-mail'
                type='email'
            >
        </Input>


        <Input
                id='password'
                label='Senha'
                type='password'
            >
        </Input>


            <Button variant="primary" >   
                ENTRAR        
            </Button>


            <Button variant="inline">
                Não possui acesso? Crie aqui!
            </Button>

            <Button variant="inline">
                <p>Esqueci minha senha</p>
            </Button>



        </Container>
    </>

)