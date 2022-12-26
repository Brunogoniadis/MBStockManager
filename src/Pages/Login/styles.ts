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
        padding-left: 20px;
        border: solid 1px var(--color-border);
        border-radius: 10px;
        
        transition: 0.45s ;
        
        
        ::placeholder{
            color: var(--color-text);
        }
        :focus{
            border: 1px solid var(--primary-color);
        }
        :required{
            border: 1px solid var(--error-color);
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