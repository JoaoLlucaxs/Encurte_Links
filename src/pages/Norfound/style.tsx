import styled from "styled-components";


export const Container=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a{
        color: orange;
        background-color: #fff;
        padding: 1.2rem;
        border-radius: 5px;
        text-decoration: none;
    }

    img{
        max-width: 300px;
        margin: 24px 0;
    }

    h1{
        color: #fff;
    }

`