import styled from "styled-components";

export const Container = styled.div`
    div {
        height: 54px;
        position: relative;
        display: flex;
        align-items: center;
    
        border-radius: 6px;

        color: var(--color-text);
        
        input {
            width: 100%;
            height: 100%;
            padding: 20px;
            border: 1.25px solid;
            display: flex;
            color: var(--color-text);
            border-radius: 10px;
            border-color: var(--color-border);

        :focus{
            border: 2px solid var(--primary-color);
        }

        }
        label {
            display: flex;
            align-items: center;
            height: 100%;
    
            position: absolute;
            top: 0;
            padding-left: 20px;
            transition: top 0.5s, left 0.3s;
        }
        input:is(:focus, :not(:placeholder-shown)) + label {
            top: -20px;
            left: 10px;
            
            height: fit-content;
            background-color: var(--primary-color);
            border: solid 2px;

            padding: 3px 10px;
            border-radius: 14px;
    
            color: #fff;
            font-size: 14px;
            transition: 0.45s ;

        }
    
        input:focus ~ svg {
            color: var(--primary-color);
        }
    
        svg {
            width: 18px;
            height: 18px;
        }
    }
    
    p.error-input {
        margin-top: 2px;
        text-align: left;
        color: var(--color-error)
    }
    & + & {
        margin-top: 12px;
    }

    

`;