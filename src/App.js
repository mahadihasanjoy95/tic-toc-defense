import './App.css';
import Board from "./components/Board";
import ButtonData from "./ButtonData";
function App() {
    const {buttons} = ButtonData;
    return (<div className="App">
        <Board className="board" data = {buttons}/>
    </div>);
}

export default App;
