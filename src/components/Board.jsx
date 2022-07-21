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
    const [isX,setX] = useState(true)
    const handleClick =(i) =>{
        squares[i] = "O"
        setSquares(squares)
        squares[i+1]="X"
        setSquares(squares)

        setX(!isX)
    }
    return (<div className="board">
        <Button className = "button" value={squares[0]} onClick = {()=>handleClick(0)}/>
        <Button className = "button" value={squares[1]} onClick = {()=>handleClick(1)}/>
        <Button className = "button" value={squares[2]} onClick = {()=>handleClick(2)}/>
        <Button className = "button" value={squares[3]} onClick = {()=>handleClick(3)}/>
        <Button className = "button" value={squares[4]} onClick = {()=>handleClick(4)}/>
        <Button className = "button" value={squares[5]} onClick = {()=>handleClick(5)}/>
        <Button className = "button" value={squares[6]} onClick = {()=>handleClick(6)}/>
        <Button className = "button" value={squares[7]} onClick = {()=>handleClick(7)}/>
        <Button className = "button" value={squares[8]} onClick = {()=>handleClick(8)}/>
    </div>);
}