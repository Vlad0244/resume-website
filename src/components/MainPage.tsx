import NavBar from "./NavBar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Header from "./Header";

function MainPage() {
    return (
        <>
            <div className="grid bg-amber-50 p-5 gap-5 bg-backgroundImg h-screen bg-cover bg-no-repeat">
                <NavBar/>
                <Header/>
                <About/>
                <Projects/>
                <Contact/>
            </div>
        </>
    )
}

export default MainPage;