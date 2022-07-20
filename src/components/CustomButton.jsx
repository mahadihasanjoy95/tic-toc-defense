/**
 * This CustomButton component is to add button in tic-toc-toe board
 * @author Mahadi Hasan Joy
 * @since 20-07-2022
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function CustomButton(props) {
    return (<>
        <button className="button">{props.name}</button>
    </>)
}