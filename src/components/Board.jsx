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
    let {elements} = props
    console.log(elements)
    return (<div className="board">
        {elements.map(buttonData=>(
            <Button buttonData = {buttonData} key = {buttonData.id}/>
        ))}
    </div>);
}