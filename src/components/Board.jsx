/**
 * This is the board what will represent the tic-toc-toe board
 * @author Mahadi Hasan Joy
 * @since 20-07-2022
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
import CustomButton from "./CustomButton";
import {useEffect, useState} from "react";

export default function Board(props) {
    let {className} = props
    const [data, setData] = useState(props.data)
    return (<div className={`text-big ${className}`}>
        {data.map(d => (
            <CustomButton key={d.id} className="button" data={d}/>
        ))}
    </div>);
}