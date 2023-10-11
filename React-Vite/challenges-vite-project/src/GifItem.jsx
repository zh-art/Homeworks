// eslint-disable-next-line react/prop-types
export const GiftItem = ({title, url}) => {
    return(
        <div className="card">
            <img src={url} alt={title}></img>
        </div>
    )
}