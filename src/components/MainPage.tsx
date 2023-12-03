import About from "./About";
import Projects from "./Projects";
import Header from "./Header";

function MainPage() {
    return (
        <>
            <div className="grid p-5 gap-5 bg-[#5ab1bb]">
                <Header/>
                <About/>
                <Projects/>
            </div>
        </>
    )
}

export default MainPage;