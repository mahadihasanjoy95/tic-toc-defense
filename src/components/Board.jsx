/**
 * This is the board what will represent the tic-toc-toe board
 * @author Mahadi Hasan Joy
 * @since 20-07-2022
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
import CustomButton from "./CustomButton";

export default function Board(props) {
    return (<div className="board">
        <CustomButton name={"O"}/>
        <CustomButton name={"O"}/>
        <CustomButton name={"O"}/>
        <CustomButton name={"O"}/>
        <CustomButton name={"O"}/>
        <CustomButton name={"O"}/>
        <CustomButton name={"O"}/>
        <CustomButton name={"O"}/>
        <CustomButton name={"O"}/>
    </div>);
}