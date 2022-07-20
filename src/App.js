import './App.css';
import Board from "./components/Board";
import ButtonData from "./ButtonData";

function App() {
    const { buttons } = ButtonData;
    return (<div className="App">
        <Board elements = {buttons}/>
    </div>);
}

export default App;
