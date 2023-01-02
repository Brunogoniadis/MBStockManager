import styled from "styled-components";



export const Container= styled.form`
    display: flex;
    align-items: center;
    
    flex-direction: column;
    text-align: center;
    
    
    width: 400px;
    min-height: 380px;
    border-radius: 16px;
    background-color: var(--color-containerPages);
    box-shadow: 1.0px 4px 4px rgba(0, 0, 0, 0.5);
    padding: 40px;

    Button{
        margin-top: 30px;
    }
    fieldset{
        border: none;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        legend{
            margin-bottom:15px;
        }
    }
`
export const StepContainer= styled.div`
    width: 100%;
    height: 90%;
`


export const Logo= styled.img`
    margin-bottom: 57px;
`