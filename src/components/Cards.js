const Card = (props) => {
    return (
        <div className="card col-md-3" >
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">Enter</a>
            </div>
        </div>
    )
}
const Cards = () => {
    return (
        <div className="cards d-flex" >

            <Card img="https://picsum.photos/id/237/400/400" title="Firulais" text="Primer contenido" />

            <Card img="https://picsum.photos/id/238/400/400" title="Travels" text="Segundo contenido" />

            <Card img="https://picsum.photos/id/249/400/400" title="Travels" text="Tercer contenido" />

            <Card img="https://picsum.photos/id/241/400/400" title="Home" text="Cuarto contenido" />

        </div>
    )
}
export default Cards;