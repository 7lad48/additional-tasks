import React from 'react';
import {City} from "./City";
import {BanknotsType, MoneyType} from "./App";

type CountryPropsType = {
    data: Array<MoneyType>
    setFilterValue: (value:BanknotsType)=>void // давайте подумаем, setFilter -это гоузчик, у которого всегда в руках товар
  }

export const Country = (props: CountryPropsType) => {
    const setAll = (value: 'All') => {
        // засетаем 'All'
        props.setFilterValue(value);
    }

    const setDollars = (value: 'Dollars') => {
        // засетаем 'Dollars'
        props.setFilterValue(value);
    }

    const setRUBLS = (value: 'RUBLS') => {
        // засетаем 'RUBLS'
        props.setFilterValue(value);
    }

    return (
        <div>
            <button onClick={() => setAll('All')}>All</button>
            <button onClick={() => setDollars('Dollars')}>Dollars</button>
            <button onClick={()=> setRUBLS('RUBLS')}>RUBLS</button>
            <City data={props.data}/>
        </div>
    );
};

