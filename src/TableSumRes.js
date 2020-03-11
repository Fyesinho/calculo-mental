import React, {Component} from 'react';
import {Table} from "react-bootstrap";

const style = {
    square: {
        height: '30px',
        width: '70px',
        margin: 'auto',
        backgroundColor: 'white',
        border: 'black 2px solid'
    }
};


class TableSumRes extends Component {
    randomSymbol = random => {
        const symbols = ['+', '-'];
        return symbols[random];
    };

    newRandomNumber = (first, second, symbol) => {
        if (symbol === '-' && second > first) {
            return this.newRandomNumber(first, this.getRandomInt(0, 11), symbol);
        } else {
            return second;
        }
    };

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    createColumns = () => {
        const tr = [];
        for (let j = 0; j < 20; j++) {
            const td = [];
            for (let i = 0; i < 3; i++) {
                const firstNumber = this.getRandomInt(0, 11);
                const symbol = this.randomSymbol(this.getRandomInt(0, 2));
                const secondNumber = this.getRandomInt(0, 11);
                td.push(
                    <>
                        <td className={'text-center border-right border-left'}>
                            <strong>{i === 0 ? j + 1 : i === 1 ? j + 21 : j + 41}</strong></td>
                        <td className={'text-center'}>{firstNumber}</td>
                        <td className={'text-center'}>{symbol}</td>
                        <td className={'text-center'}>{this.newRandomNumber(firstNumber, secondNumber, symbol)}</td>
                        <td className={'text-center border-right'}>=</td>
                        <td className={'text-center'}>
                            <div style={style.square}/>
                        </td>
                    </>
                );
            }
            tr.push(
                <tr className={'border-left border-right border-bottom'}>
                    {td}
                </tr>
            )
        }
        return tr
    };

    render() {
        return (
            <Table>
                <thead>
                <tr>
                    <th className={'text-center border-right border-left'}>#</th>
                    <th colspan="4" className={'text-center border-right border-left'}>Ejercicio</th>
                    <th className={'text-center border-right border-left'}>Respuesta</th>
                    <th className={'text-center border-right border-left'}>#</th>
                    <th colspan="4" className={'text-center border-right border-left'}>Ejercicio</th>
                    <th className={'text-center border-right border-left'}>Respuesta</th>
                    <th className={'text-center border-right border-left'}>#</th>
                    <th colspan="4" className={'text-center border-right border-left'}>Ejercicio</th>
                    <th className={'text-center border-right border-left'}>Respuesta</th>
                </tr>
                </thead>
                <tbody>
                {this.createColumns()}
                </tbody>
            </Table>
        );
    }
}

export default TableSumRes;