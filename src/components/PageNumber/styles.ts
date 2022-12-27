import styled from "styled-components";
import css from "styled-jsx/css";
import { IPageNumberProps } from "./types"

export const Container = styled.div `
    width: 80px;
    background-color: beige;
    margin-top: -15px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

`


export const Circle1 = styled.div`
    width: 10px;
    height: 10px;
    background-color: var(--primary-color);
    position: relative;
    border-radius: 50%;
    margin: 5px;
`

export const Circle2 = styled.div`
    width: 10px;
    height: 10px;
    background-color: var(--primary-color);
    position: relative;
    border-radius: 50%;
    margin: 5px;
`