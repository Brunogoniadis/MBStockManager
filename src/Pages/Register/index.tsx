import { Button } from "../../styles/Button";
import { Container, Logo, AsideContainer} from "./styles";
import { Input } from "../../components/Input/"


import MBStock from "./../../../public/MBStock.svg"


export const Register = () =>(
    <>
        <Logo src={MBStock}/>    
        <Container>

        <AsideContainer>
        <Input
                id='name'
                label='Nome'
                type='text'
            >
            </Input>


            <Input
                id='surname'
                label='Sobrenome'
                type='text'
            >  
            </Input>

            <Input
                id='userName'
                label='Nome de usuário'
                type='text'
            >
            </Input>


            <Button variant="primary" >   
                Próximo        
            </Button>

        </AsideContainer>



        </Container>
    </>

)