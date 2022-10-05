import styled, { keyframes } from "styled-components";

export const Container=styled.div`
    display: flex;
    max-width: 100%;
    height: 100vh;
    flex-direction: column;
`
export const Home=styled.div`
    text-align: center;
    margin-top: 1.8rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;

    span{
        font-size: 19px;
    }
    svg{
        margin-top: 1.5rem;
    }
`

export const Form=styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 1.2rem;

    div{
        width: 50%;
        height: 46px;
        background-color: rgba(255,255,255,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 4px;
    }
    svg{
        margin: 0 3px;
        color: #222;
    }
`

export const Input=styled.input`
    width: 100%;
    background: transparent;
    border: 0;
    height: 46px;
    color: #fff;
    outline: none;
    
`

export const Button=styled.button`
    width: 50%;
    height: 46px;
    border-radius: 5px;
    border: 0;
    font-size: 16px;
    font-weight: bold;
    color: #222;
    margin-top: 8px;
    cursor: pointer;
    transition: 0.5s ease-in-out;

    &:hover{
        background-color: #cccc;
    }
`