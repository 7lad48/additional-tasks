import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";


type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props:CurrentBankomatPropsType) => {

    return (
        <Money color={props.money.banknotes === 'Dollars' ? 'green' : 'blue'}>
            <div>{props.money.banknotes}</div>
            <div>{props.money.value}</div>
            <div>{props.money.number}</div>
        </Money>
    );
};

const Money = styled.div`
  background-color: ${props => 
    props.color === 'green' ? 'palegreen' : '#61dafb'
};
  width: 350px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  
`