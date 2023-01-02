import styled, { css } from "styled-components";
import { Link as LinkRouter } from 'react-router-dom'

interface IButtonProps{
    variant: 'primary' | 'error' | 'inline' | 'noline' | 'icon';
    width?: string
}

const ButtonStyled ={
    primary: css`
        background-color: var(--primary-color);
        color:white;
        padding: 0 15px;
    `,
        error: css`
        background: var(--color-error);
    `,
    inline: css`
        background: none;
        color: var(--color-text);
        text-decoration: underline;
    `,
    noline: css`
        background: none;
        color: var(--color-text);
        text-decoration: none;
    `,
    icon:css`
        width: 50px;
        height: 50px;
        filter: invert(32%) sepia(100%) saturate(4392%) hue-rotate(207deg) brightness(89%) contrast(83%);
    `
}

const ButtonStyledDefault = css`
    min-height: 48px;
    padding: 0 15px;
    font-weight: 500;
`

export const Button = styled.button<IButtonProps>`
    ${({ variant }) => ButtonStyled[variant]}
    ${ButtonStyledDefault}
    width: ${({ width }) => width || '100%' } ;
    border-radius: 10px;
    border: none;
`;

export const Link = styled(LinkRouter)<IButtonProps>`
   text-decoration: none;
   border-radius: 6px;
   ${({ variant }) => ButtonStyled[variant]}
   ${ButtonStyledDefault}
   display: flex;
   justify-content: center;
   align-items: center;
`
