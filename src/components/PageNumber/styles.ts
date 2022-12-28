import styled, {css} from "styled-components";

export interface IPageNumberProps {
    key?:number
    pageNumber: number
}

export const Container = styled.div`
    width: 80px;
    margin-top: -15px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

`
export const Circle1 = styled.div<IPageNumberProps>`
    width: 10px;
    height: 10px;
    background-color: 
        ${({ pageNumber }) => 
        pageNumber==1 ? `var(--primary-color)`:
        `var(--color-border)`};
    position: relative;
    border-radius: 50%;
    margin: 5px;
`
export const Circle2 = styled.div<IPageNumberProps>`
    width: 10px;
    height: 10px;
    background-color: 
        ${({ pageNumber }) => 
        pageNumber==1 ? `var(--color-border)`:
        `var(--primary-color)`};
    position: relative;
    border-radius: 50%;
    margin: 5px;
`




