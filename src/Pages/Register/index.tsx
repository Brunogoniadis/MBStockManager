import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'

import { Button, Link } from "../../styles/Button";

import { AiFillEye, AiFillEyeInvisible, AiOutlineClose } from 'react-icons/ai'

import { Logo, FormStep, ContainerTitle } from "./FormStep";


import { Input } from "../../components/Input/"
import { PageNumber } from "../../components/PageNumber";

import { IRegisterData } from "./types";
import MBStock from "./../../../public/MBStock.svg"


import { schema } from './validations';



export const Register = () => {

    function registerUser(data: IRegisterData) {
        console.log('Cadastro com sucesso');
    }

    const [step, setStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterData>({
        resolver: yupResolver(schema),
    });

    console.log(errors)

    return (
        <>
            <Logo src={MBStock} />



            <FormStep step={step} onSubmit={handleSubmit(registerUser)}>

                <div className='containerTitle'>
                    <Link variant='icon' to='/'>
                        <AiOutlineClose />
                    </Link>


                </div>

                <legend>Faça o seu registro:</legend>
                <PageNumber pageNumber={step} />

                <fieldset>


                    <div className='steps-container'>
                        <div>
                            <Input
                                id='name'
                                label='Nome'
                                type='text'
                                error={errors.name?.message}
                                {...register('name')}

                            ></Input>


                            <Input
                                id='surname'
                                label='Sobrenome'
                                type='text'
                                error={errors.surname?.message}
                                {...register('surname')}

                            ></Input>

                            <Input
                                id='userName'
                                label='Nome de usuário'
                                type='text'
                                error={errors.userName?.message}
                                {...register('userName')}
                            ></Input>


                            <Button variant="primary" onClick={() =>
                                setStep(2)} type="button">
                                Próximo
                            </Button>


                            <Link
                                to='/'
                                type='button'
                                variant='inline'
                                onClick={() => setStep(1)}
                            >
                                Voltar
                            </Link>

                        </div>


                        <div>
                            <Input
                                id="email"
                                label="E-mail"
                                type='email'
                                error={errors.email?.message}
                                {...register('email')}
                            ></Input>




                            <Input
                                id="password"
                                label="Senha"
                                type={showPassword ? 'text' : 'password'}
                                error={errors.password?.message}
                                {...register('password')}

                            >
                                <Button
                                    type='button'
                                    variant='inline'
                                    width='auto'
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                                </Button>

                            </Input>

                            <Input
                                id="password"
                                label="Confirmar senha:"
                                type={showPassword ? 'text' : 'password'}
                                error={errors.passwordConfirmation?.message}
                                {...register('passwordConfirmation')}
                            >
                                <Button
                                    type='button'
                                    variant='inline'
                                    width='auto'
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                                </Button>
                            </Input>

                            <Button variant="primary" type="submit">
                                Concluir
                            </Button>



                        </div>



                    </div>


                </fieldset>
            </FormStep >

        </>

    )
}