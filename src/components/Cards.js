const Card = (props) => {
    return (
        <div className="card" >
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-dark">Enter</a>
            </div>
        </div>
    )
}
const Cards = () => {
    return (
        <div className="row" >

            <div className="col-12 col-md-3" >
            <Card img="https://picsum.photos/id/237/400/400" title="Firulais" text="Primer contenido" />
            </div>
            <div className="col-12 col-md-3" >
            <Card img="https://picsum.photos/id/238/400/400" title="Travels" text="Segundo contenido" />
            </div>
            <div className="col-12 col-md-3" >
            <Card img="https://picsum.photos/id/249/400/400" title="Travels" text="Tercer contenido" />
            </div>
            <div className="col-12 col-md-3" >
            <Card img="https://picsum.photos/id/241/400/400" title="Home" text="Cuarto contenido" />
            </div>

        </div>
    )
}
export default Cards;