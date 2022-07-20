import './App.css';
import Board from "./components/Board";
import ButtonData from "./ButtonData";
import CustomButton from "./components/CustomButton";

function App() {
    const {buttons} = ButtonData;

    return (<div className="App">
        <Board>
        </Board>

    </div>);
}

export default App;
