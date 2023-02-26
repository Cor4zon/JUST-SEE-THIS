import './IndexRow.scss'

const IndexRow = ({ icon, category, score }) => {
    return (
        <div className="index-row-container">
            <img src={icon} />

            <p>{category}</p>
            <p>{`${score}/100`}</p>
        </div>
    )
}

export default IndexRow
