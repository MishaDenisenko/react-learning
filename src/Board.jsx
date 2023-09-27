import {Square} from "./Square";
import {useState} from "react";

export function Board({xIsNext, squares, onPlay}) {

    const winner = calculateWinner(squares);

    let status;

    if (winner) status = 'Winner: ' + winner
    else status = 'Next player: ' + (xIsNext ? 'X' : 'O');

    const onHandleClick = (i) => {
        if (squares[i] || calculateWinner(squares)) return;

        let nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";
        onPlay(nextSquares)
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onHandleClick={() => onHandleClick(0)}/>
                <Square value={squares[1]} onHandleClick={() => onHandleClick(1)}/>
                <Square value={squares[2]} onHandleClick={() => onHandleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onHandleClick={() => onHandleClick(3)}/>
                <Square value={squares[4]} onHandleClick={() => onHandleClick(4)}/>
                <Square value={squares[5]} onHandleClick={() => onHandleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onHandleClick={() => onHandleClick(6)}/>
                <Square value={squares[7]} onHandleClick={() => onHandleClick(7)}/>
                <Square value={squares[8]} onHandleClick={() => onHandleClick(8)}/>
            </div>
        </>
    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (const line of lines) {
        const [a, b, c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
    }
    return null;
}