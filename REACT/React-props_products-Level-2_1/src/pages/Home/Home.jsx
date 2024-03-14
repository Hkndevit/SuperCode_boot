import Gallery from "../../components/Gallery/Gallery";
import "./Home.css"

const Home = () => {
    return (
        < section className="gallery-grid"> 
        <Gallery 
        img="src/assets/Bilder/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg"
        titel="cocooil"
        price="$30" />

        <Gallery 
        img="src/assets/Bilder/photo-1526170375885-4d8ecf77b99f.avif"
        titel="Irgendwas"
        price="$60" />

        <Gallery 
        img="src/assets/Bilder/25ebdc_11569a061f824bc99cda2e6b1ac6348b~mv2.webp"
        titel="Was was"
        price="$20" />
        </section>

        
    )
}

export default Home;