import './Game.css'
import Board from './Board';
import Status from './Status';
import RestartButton from './Restart';
import { useState } from 'react';
import {calculateWinner} from './Winner'

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);
    

    const handleClick = (index) => {
        const newBoard = [...board]
        // Проверка победной комбинации и занята ли ячейка
        if (winner || newBoard[index]) return
        // Определение очередности хода
        newBoard[index] = xIsNext ? 'X' : 'O'
        //Обновление
        setBoard(newBoard)
        setXIsNext(!xIsNext)
    }

 
 const restart = () => {
     setBoard(Array(9).fill(null))}

    return (
        <div className='conteiner'>
            <Status winner={winner} xIsNext={xIsNext} board={board} />
            <Board squares={board} click={handleClick}/>
            <RestartButton onClick={restart} />

            
        </div>
    );
}

export default Game;
