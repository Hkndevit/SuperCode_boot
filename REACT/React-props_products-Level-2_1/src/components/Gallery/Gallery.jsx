import "./Gallery.css";

const Gallery = (props) => {

    return (
        <section className="gallery">
            <div className="flex-gallery">
            <img src={props.img} alt="products" />
            <p>{props.titel}</p>
            <p>{props.price}</p>
            <a href="#">BUY NOW</a>
            </div>
        </section>
    );
};

export default Gallery;