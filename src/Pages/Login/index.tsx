import { Button, Link } from "../../styles/Button";
import { Container, Logo } from "./styles";
import MBStock from "./../../../public/MBStock.svg"
import { Input } from "../../components/Input";
import { FormStep } from "../../styles/FormStep";

export const Login = () => (
    <>
        <Logo src={MBStock} />
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


            <Link to='/register' variant="inline">
                Não possui acesso? Crie aqui!
            </Link>

            <Button variant="noline">
                <p>Esqueci minha senha</p>
            </Button>



        </Container>
    </>

)