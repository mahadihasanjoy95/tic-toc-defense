import './App.css';
import Board from "./components/Board";
import ButtonData from "./ButtonData";
function App() {
    const {winningPatterns, winningPatternsNext} = ButtonData
    return (<div className="App">
        <Board winningPatterns = {winningPatterns} winningPatternsNext={winningPatternsNext}/>
    </div>);
}

export default App;
