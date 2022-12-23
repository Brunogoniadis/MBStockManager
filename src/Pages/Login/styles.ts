import styled from "styled-components";

export const Container= styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;


    width: 400px;
    height: 380px;
    border-radius: 16px;
    background-color: var(--color-containerPages);
    box-shadow: 1.0px 4px 4px rgba(0, 0, 0, 0.5);
    padding: 40px;
    input{
        height: 54px;
        margin-bottom: 18px;
        border: solid 1px var(--color-border);
        border-radius: 10px;
        
        ::placeholder{
            color: var(--color-text);
            padding-left: 20px;
        }
    }

    pContainer{
        margin-top: 48px;
        line-height:35px;
        p{
            
        }
    }

`
export const Logo= styled.img`
    margin-bottom: 57px;
`