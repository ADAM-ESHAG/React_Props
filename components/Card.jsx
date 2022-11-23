

export default function Card(props) {
    let soldText
    if (props.item.openSpots === 0) {
        soldText = "SOLD OUT"
        
    } else if (props.item.location === "Online") {
        soldText = "Online"
    }
    return (
        <main className="main--card">
            <div className="card">
                {soldText && <div className="card--badge">{soldText}</div>}
                
                <img src={props.item.coverImg} className="card--image" />
                <div className="card--stats">
                    <img src={props.item.starImg} className="card--star" />
                    <span>{props.item.stats.rating}</span>
                    <span className="gray">({props.item.stats.reviewCount}) • </span>
                    <span className="gray">{props.item.location}</span>
                </div>
                <p>{props.item.title}</p>
                <p><span className="bold">From ${props.item.price}</span> / person</p>
            </div>
        </main>
    )
}