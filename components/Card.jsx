

export default function Card(props) {
    return (
        <main className="main--card">
            <div className="card">
                <img src={props.img} className="card--image" />
                <div className="card--stats">
                    <img src={props.starImage} className="card--star" />
                    <span>5.0</span>
                    <span className="gray">{props.reviewCount} • </span>
                    <span className="gray">{props.country}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </main>
    )
}