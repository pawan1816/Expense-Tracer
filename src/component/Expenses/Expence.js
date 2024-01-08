import React,{useState} from 'react';
import './Expence.css';
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
function Expence(props){
    
    return (
        <Card className='expence-item'>
            <ExpenseDate date={props.date} />
            <div className='expence-item__description'>
                <h2>{ props.title }</h2>
                <div className='expence-item__price'>${ props.amount }</div>
            </div>
        </Card>
    );
}
export default Expence;