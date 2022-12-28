import { useState } from "react";

import { Button } from "../../styles/Button";
import { Container, Logo, StepContainer } from "./styles";
import { Input } from "../../components/Input/"
import { PageNumber } from "../../components/PageNumber";


import MBStock from "./../../../public/MBStock.svg"


export const Register = () => {

    const [step, setStep] = useState(1);


    return(
        <>
        <Logo src={MBStock} />
        <Container>

            <PageNumber key={0} pageNumber={step} />

            <StepContainer>
                <div>
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
                </div>

            </StepContainer>




        </Container>
    </>

    )
}