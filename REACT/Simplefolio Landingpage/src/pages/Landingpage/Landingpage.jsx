import "./Landingpage.css";

import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import Footer from "../../components/Footer/Footer";


const Landingpage = () => {
    return (
<section>
    <Nav />
    <Header />
    <Projects />
    <Skills />
    <Footer />
</section>
    );
}

export default Landingpage;