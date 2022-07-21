import {useEffect} from "react";
import {useState} from "react";

/**
 * This CustomButton component is to add button in tic-toc-toe board
 * @author Mahadi Hasan Joy
 * @since 20-07-2022
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function CustomButton(props) {
    const {className} = props
    const [boardValue,setBoardValue] = useState(props.data)


    useEffect(() => {
        if (boardValue.name === "O") {
            boardValue.name = ""
        } else {
            boardValue.name = "X"
        }

    }, []);
    return (<>
        <button className={`text-big ${className}`}>{boardValue.name}</button>
    </>)
}