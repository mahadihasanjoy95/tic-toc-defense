import {useState} from "react";
import Button from "./Button";

/**
 * This is the board what will represent the tic-toc-toe board
 * @author Mahadi Hasan Joy
 * @since 20-07-2022
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function Board(props) {

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isX, setX] = useState(true)
    const [a,setA]=useState(true)

    const checkWinner = () =>{
        const winningPatterns =[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i = 0; i < winningPatterns.length; i++) {
            const [a, b, c] = winningPatterns[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                console.log(squares[a] + " is the winner")
                squares[a]==="O"?squares[a]="o":squares[a]="x"
                squares[b]==="O"?squares[b]="o":squares[b]="x"
                squares[c]==="O"?squares[c]="o":squares[c]="x"
                for (let k = 0; k < squares.length; k++) {
                    if (squares[k]===null){
                        squares[k]=""
                        setSquares(squares)
                    }
                }
                return squares[a];
            }
        }
        return null;
    }
    const firstMoveOfPc = () => {
        console.log("HEREEEEE")
        let randomNumber = Math.floor(Math.random() * 9)
        if (squares[randomNumber] === null) {
            squares[randomNumber] = "X"
            setSquares(squares)
            setX(false)
            checkWinner()
        } else firstMoveOfPc()
    }

    const moveOfPc = () => {
        // if (a) {
            firstMoveOfPc()
            setA(false)
            return

        // }
        // for (let i = 0; i < squares.length; i++) {
        //     if (squares[i] === null) {
        //         squares[i] = "X"
        //         setSquares(squares)
        //         break;
        //     }
        // }
    }
    const handleClick = (i) => {
        if (squares[i] === null) {
            squares[i] = "O"
            setSquares(squares)
            if (checkWinner()===null){
                moveOfPc()
            }
            setX(!isX)
        } else if(squares[i]===""){
            alert("We got the winner, reload this page")
        }
        else{
            alert("Already Select this button!!")
        }
    }
    return (<div className="board">
        <Button className="button" value={squares[0]} onClick={() => handleClick(0)}/>
        <Button className="button" value={squares[1]} onClick={() => handleClick(1)}/>
        <Button className="button" value={squares[2]} onClick={() => handleClick(2)}/>
        <Button className="button" value={squares[3]} onClick={() => handleClick(3)}/>
        <Button className="button" value={squares[4]} onClick={() => handleClick(4)}/>
        <Button className="button" value={squares[5]} onClick={() => handleClick(5)}/>
        <Button className="button" value={squares[6]} onClick={() => handleClick(6)}/>
        <Button className="button" value={squares[7]} onClick={() => handleClick(7)}/>
        <Button className="button" value={squares[8]} onClick={() => handleClick(8)}/>
    </div>);
}