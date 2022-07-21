/**
 * This Button component is to add button in tic-toc-toe board
 * @author Mahadi Hasan Joy
 * @since 20-07-2022
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function Button(props) {
    let {className, value, onClick} = props
    return (<>
        <button onClick={onClick}  className={`text-big ${className}`}>{value}</button>
    </>)
}