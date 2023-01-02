import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
` 
export const Icon = styled.div`
    position: absolute;
    top:-90%;
    left: 88%;
    transform: translateY(-50%);
    z-index:1001;

`

export const Container = styled.div`
    
    div {
        height: 54px;
        
        width: 100%;
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
            position: absolute;
        }
    }
    
    p.error-input {
        margin-top: 2px;
        position: absolute;
        text-align: left;
        color: var(--error-color)
    }
    & + & {
        margin-top: 28px;
    }

    

`;