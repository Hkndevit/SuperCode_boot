import Button from "../../components/Button/Button";
import Nav from "../../components/Nav/Nav";
import Blog from "../Blog/Blog";
import "./Home.css"

const Home = () => {
    return (
        <>
        <section>
            <div>
            <img src="../../src\assets\Bilder\photo-1512295767273-ac109ac3acfa 1.jpg" alt="backgoundImage" />
            </div>
            <div>
            <h1>Welcome to my <br />Simple Blog / KEINE ZEIT MEHR WEITER ZU CODEN... SPÄTER GEHTS WEITER</h1>
            <button className="button">Go to articles</button>
            </div>
        </section>
        </>
    )
}

export default Home;