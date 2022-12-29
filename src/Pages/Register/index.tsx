import { useState } from "react";

import { Button } from "../../styles/Button";
import { Container, Logo, StepContainer } from "../../styles/FormStep";
import { Input } from "../../components/Input/"
import { PageNumber } from "../../components/PageNumber";


import MBStock from "./../../../public/MBStock.svg"


export const Register = () => {


    const [step, setStep] = useState(1);


    return (
        <>
            <Logo src={MBStock} />




            <Container step={step}>
                <legend>Faça o seu registro:</legend>
                <PageNumber key={0} pageNumber={step} />

                <fieldset>


                    <div className= 'steps-container'>
                        <div>
                            <Input
                                id='name'
                                label='Nome'
                                type='text'
                            ></Input>


                            <Input
                                id='surname'
                                label='Sobrenome'
                                type='text'
                            ></Input>

                            <Input
                                id='userName'
                                label='Nome de usuário'
                                type='text'
                            ></Input>


                            <Button variant="primary" onClick={() =>
                                setStep(2)} type="button">
                                Próximo
                            </Button>
                        </div>

                        <div>
                            <Input
                                id="email"
                                label="E-mail"
                                type='email'
                            ></Input>

                            <Input
                                id="password"
                                label="Senha"
                                type="password"
                            ></Input>

                            <Input
                                id="password"
                                label="Confirmar senha:"
                                type="password"
                            ></Input>
                            <Button variant="primary" type="submit">
                                Concluir
                            </Button>

                        </div>



                    </div>


                </fieldset>
            </Container>

        </>

    )
}