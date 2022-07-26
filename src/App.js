import './App.css';
import GameLayout from "./components/Layouts/GameLayout";
import ButtonData from "./ButtonData";
import Button from "./components/Button";
import Board from "./components/Board";
import {useState} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Error from "./components/Error";

function App() {
    const {winningPatterns, winningPatternsNext} = ButtonData
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [start, setStart] = useState(false)
    const [restart, setReStart] = useState(false)

    /**
     * This method trigger after player choose his button
     */
    const moveOfPc = () => {
        for (let i = 0; i < winningPatternsNext.length; i++) {
            const [x, y, z] = winningPatternsNext[i];
            if (squares[x] && squares[x] === "0" && squares[y] === "0" && squares[z] === null) {
                squares[z] = "1"
                setSquares(squares)
                return;
            }
        }
    }
    /**
     *
     * @param i
     */
    const handleClick = (i) => {
        if (squares[i] === null) {
            squares[i] = "0"
            setSquares(squares)
            moveOfPc()
            setStart(!start)
        } else if (squares[i] === "") {
            alert("We got the winner, reload this page")
        } else {
            alert("Already Select this button!!")
        }
    }

    const handleNavigation = (i) =>{
        console.log(i)
        return (<Navigate to={"/"+i} replace={true}/>)
    }
    return (<div className="App">
        <Routes>
            <Route path={"/"} element={<GameLayout winningPatterns = {winningPatterns} winningPatternsNext={winningPatternsNext} ></GameLayout>}>
                <Route index element={<Button className1={"button"} className2="button" value={"Start"} onClick={()=>handleNavigation("start")}/>}>
                </Route>
                <Route path ={"start"} element={ <Board winningPatterns={winningPatterns} winningPatternsNext={winningPatternsNext} class = "board">
                    <Button className1="button" className2="button2" value={squares[0]} onClick={() => handleClick(0)}/>
                    <Button className1="button" className2="button2" value={squares[1]} onClick={() => handleClick(1)}/>
                    <Button className1="button" className2="button2" value={squares[2]} onClick={() => handleClick(2)}/>
                    <Button className1="button" className2="button2" value={squares[3]} onClick={() => handleClick(3)}/>
                    <Button className1="button" className2="button2" value={squares[4]} onClick={() => handleClick(4)}/>
                    <Button className1="button" className2="button2" value={squares[5]} onClick={() => handleClick(5)}/>
                    <Button className1="button" className2="button2" value={squares[6]} onClick={() => handleClick(6)}/>
                    <Button className1="button" className2="button2" value={squares[7]} onClick={() => handleClick(7)}/>
                    <Button className1="button" className2="button2" value={squares[8]} onClick={() => handleClick(8)}/>
                </Board>}>
                </Route>
            </Route>
            <Route path={"*"} element={<Error/>}></Route>
        </Routes>
    </div>);
}

export default App;
