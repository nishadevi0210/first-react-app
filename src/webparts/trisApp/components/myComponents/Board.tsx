import * as React from "react";
import styles from "../TrisApp.module.scss";
import { Square } from "./Square";

export const Board = () => 
{
    const winningLines = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];
    
// states
    const [squares, setSquaresText] = React.useState( ["", "", "", "", "", "", "", "", ""] );
    const [xIsNext, setXIsNext] = React.useState(true); // state as a flag to set the first turn to X


    let status;
    
    const winner = calculateWinner(squares);
    
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return(       
        <div>
            <div className={styles.status}>
            {status}
            </div>
            <div className={styles["board-row"]}>
                {renderSquareComp(1, squares, setSquaresText, xIsNext, setXIsNext)}
                {renderSquareComp(2, squares, setSquaresText, xIsNext, setXIsNext)}
                {renderSquareComp(3, squares, setSquaresText, xIsNext, setXIsNext)}
            </div>
            <div className={styles["board-row"]}>
                {renderSquareComp(4, squares, setSquaresText, xIsNext, setXIsNext)}
                {renderSquareComp(5, squares, setSquaresText, xIsNext, setXIsNext)}
                {renderSquareComp(6, squares, setSquaresText, xIsNext, setXIsNext)}
            </div>
            <div className={styles["board-row"]}>
                {renderSquareComp(7, squares, setSquaresText, xIsNext, setXIsNext)}
                {renderSquareComp(8, squares, setSquaresText, xIsNext, setXIsNext)}
                {renderSquareComp(9, squares, setSquaresText, xIsNext, setXIsNext)}
            </div>
        </div>
    )

    //const renderSquareComp = (i, squares, setSquaresText) => {
    function renderSquareComp(i, squares, setSquaresText, xIsNext, setXIsNext) {
        return <Square matrixPosition={squares[i]} onClick={() => handleClick(i, squares, setSquaresText, xIsNext, setXIsNext)} />;
    }

    function calculateWinner(squares) {
        for (let i = 0; i < winningLines.length; i++) {
          const [a, b, c] = winningLines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    function handleClick(i, squares, setSquaresText, xIsNext, setXIsNext) {
        const newS = JSON.parse(JSON.stringify(squares));
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        if (xIsNext) {
            newS[i] = 'X';
        } else {
            newS[i] = 'O';
        } // newS[i] = xIsNext ? 'X' : 'O';

		setSquaresText(newS);
        setXIsNext(!xIsNext);
	}

}