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
    const {winningPatterns,winningPatternsNext} = props


    /**
     * Checking anyone win the game or not
     * @returns {null|any}
     */
    const checkWinner = () =>{
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
    /**
     * trigger only for firstMove randomly pick one button
     */
    const firstMoveOfPc = () => {
        let randomNumber = Math.floor(Math.random() * 9)
        if (squares[randomNumber] === null) {
            squares[randomNumber] = "X"
            setSquares(squares)
            setX(false)
            checkWinner()
        } else firstMoveOfPc()
    }

    /**
     * This method trigger after player choose his button
     */
    const moveOfPc = () => {
        let flag = false
        if (a) {
            firstMoveOfPc()
            setA(false)
            return

        }
        for (let i = 0; i < winningPatternsNext.length; i++) {
            const [x, y, z] = winningPatternsNext[i];
            console.log(x+":"+squares[x],y+":"+squares[y],z+":"+squares[z])
            if (squares[x] && squares[x] === "O" && squares[y]==="O" && squares[z]===null) {
                squares[z]="X"
                setSquares(squares)
                flag = true
                checkWinner()
                return;
            }
        }
        if (!flag){
                firstMoveOfPc()
                return;

        }

    }
    /**
     *
     * @param i
     */
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
        <Button className1="button" className2="button2" value={squares[0]} onClick={() => handleClick(0)}/>
        <Button className1="button" className2="button2" value={squares[1]} onClick={() => handleClick(1)}/>
        <Button className1="button" className2="button2" value={squares[2]} onClick={() => handleClick(2)}/>
        <Button className1="button" className2="button2" value={squares[3]} onClick={() => handleClick(3)}/>
        <Button className1="button" className2="button2" value={squares[4]} onClick={() => handleClick(4)}/>
        <Button className1="button" className2="button2" value={squares[5]} onClick={() => handleClick(5)}/>
        <Button className1="button" className2="button2" value={squares[6]} onClick={() => handleClick(6)}/>
        <Button className1="button" className2="button2" value={squares[7]} onClick={() => handleClick(7)}/>
        <Button className1="button" className2="button2" value={squares[8]} onClick={() => handleClick(8)}/>
    </div>);
}