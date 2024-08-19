import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import perroImage from "../../img/perro.jpg";
import eifelImage from "../../img/eifel.jpg";
import playaImage from "../../img/playa.jpg";



export const Card = () => {

    const cardsData = [
        {
        title: "rigo Baby",
        imagen: rigoImage,
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        buttonLabel: "Click here"
    },
    {
        title: "Cute dog",
        imagen: perroImage,
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        buttonLabel: "Click here"
    },
    {
        title: "Eifel Tower",
        imagen: eifelImage,
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        buttonLabel: "Click here"
    },
    {
        title: "Playa",
        imagen: playaImage,
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        buttonLabel: "Click here"
    },
]

const imgStyle = {
    width: "100%",      // Ocupa todo el ancho del contenedor
    height: "200px",    // Fija la altura de la imagen
    objectFit: "cover"  // Asegura que la imagen se recorte adecuadamente
};

return ( 
    <div className="d-flex flex-wrap justify-content-center">
        {cardsData.map((item) => (
        <div className="card m-2" style={{width: "18rem"}}>
            <img src={item.imagen} className="card-img-top image-fixed-size" alt="imagen" style={imgStyle} />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <a href="#" className="btn btn-primary">{item.buttonLabel}</a>
            </div>
        </div> ))}
    </div>
    )   
}
