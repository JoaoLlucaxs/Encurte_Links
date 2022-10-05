import styled from "styled-components";


export const Linkss=styled.div`
    max-width: 1120px;
    margin: 32px auto 0 auto;

    @media (max-width:715px) {
        width: 90%;
    }
`

export const Header=styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 14px;
    align-items: center;

    h1{
        color: #fff;
    }
    
    @media (max-width:715px) {
        h1{
            font-size: 40px;
    }
}
`
export const Item=styled.div`
    width: 700px;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-top: 8px;

    &:last-child{
        margin-bottom: 18px;
    }

    @media (max-width:715px) {
        width: 100%;
    }
`

export const button=styled.button`
    border: 0;
    width: 100%;
    min-width: 80%;
    border-radius: 4px;
    height: 46px;
    background-color: rgba(255,255,255,0.15);
    margin-right: 14px;
    display: flex;
    align-items: center;
    padding: 0 14px;
    font-size: 18px;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    svg{
        margin-right: 14px;
        color: #fff;
    }

    
    @media (max-width:715px) {
        width: 100%;
    }
`

export const buttonDelete=styled.button`
    border: 0;
    background: #fff;
    border-radius: 2px;
    cursor: pointer;
`
