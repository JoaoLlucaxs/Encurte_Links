import { button } from '../../pages/Link/style';
import styled from "styled-components";


export const modalContainer=styled.div`
    position: absolute;
    bottom: 18px;
    background-color: #fff;
    padding: 14px;
    width: 90%;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    animation: identifier 1.5s;

    span{
        margin: 14px 0;
        color: #a7a7a7;
        font-size: 18px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    @keyframes identifier {
        from{
            transform: translateY(90px);
        }
        to{
            transform: translateY(0);
        }
    }
    @media (max-width:735px){
        width: 70%;
        right: 20%;
    }
`


export const modalHeader=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        border: 0;
        background: orange;
        border-radius: 3px;
        cursor: pointer;
    }
   
`

export const Button=styled.button`
   
  background: #f12711;
  background: -webkit-linear-gradient(to right, #f12711, #f5af19);
  background: linear-gradient(to right, #f12711, #f5af19);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  height: 38px;
  border: 0;
  border-radius: 2px;
  color: #fff;
`