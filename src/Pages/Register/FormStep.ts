import styled from "styled-components";

interface IFormStepProps {
    step: number
}



export const FormStep  = styled.form<IFormStepProps>`
    
    --selected-item: ${({ step }) => step - 1};
    --total-items: 2;


    display: flex;
    align-items: center;
    min-height: 380px;
    max-width: 480px;

    flex-direction: column;
    text-align: center;
    border-radius: 5px;


    background-color: var(--color-containerPages);
    box-shadow: 1.0px 4px 4px rgba(0, 0, 0, 0.5);
    padding-top: 40px;
    margin: 25px;
    overflow: hidden;


    @media (min-width: 320px) {
        height: 100%;
        width: 100%;
        
    }

    .containerTitle{
        
        position: absolute;
        display: flex;
        width: 400px;
        justify-content: flex-start;
    }

    legend{
            margin-bottom:15px;
            margin-top: -5px;
    }
        
    Button{
        margin-top: 30px;
        margin-bottom: -20px;
    }

    fieldset {
    border: none;
    position:relative;

    > div.steps-container{
        > div {
            margin: 40px;
        }
        position: relative;
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
        left: calc(var(--selected-item) * -100%);
        width: calc(100% * var(--total-items));
        transition: left 0.8s cubic-bezier(0.68, -0.35, 0.265, 1.55);

        
    }

    }


`



export const Logo = styled.img`
    margin-bottom: 57px;

    @media (min-width: 375px) {
        margin-top: 20px;
        margin-bottom: -2px;
    }
`