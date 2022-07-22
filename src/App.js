import './App.css';
import Board from "./components/Board";
import ButtonData from "./ButtonData";
import Button from "./components/Button";

function App() {
    return (<div className="App">
        <Board/>
        {/*Reusable component example*/}
        {/*<Button value ="F" className2 = "button" onClick={() => alert("Hi")} ></Button>*/}
        {/*<Board/>*/}
    </div>);
}

export default App;
