import './IndexRow.scss'

const IndexRow = ({ icon, category, score }) => {
    return (
        <div className="index-row-container">
            <div className="index-row-category-desc">
                <img className="index-row-icon" src={icon} />
                <p className="index-row-category-title">{category}</p>
            </div>
            <p className="index-row-score">
                {score}
                <span>{`/100`}</span>
            </p>
        </div>
    )
}

export default IndexRow
