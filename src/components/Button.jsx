/**
 * This Button component is to add button in tic-toc-toe board
 * @author Mahadi Hasan Joy
 * @since 20-07-2022
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function Button(props) {
    let {className1, className2, value, onClick} = props
    return (<>
        {value==="O"||value==="X"||value===""||value===null?
            <button onClick={onClick}  className={`text-big ${className1}`}>{value}</button>:
            <button onClick={onClick}  className={`text-big ${className2}`}>{value}</button>}
    </>)
}