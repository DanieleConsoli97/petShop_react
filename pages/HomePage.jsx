import Hero from "../components/Hero"
import NavBar from "../components/NavBar"
import PathNav from "../components/pathNav"
import CarouselCustom from "../components/Carousel"

const HomePage = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <PathNav />
            <div className="container-sm">
            <p>Prodotti per Cani</p>
                <CarouselCustom />
                <p>Prodotti per gatti</p>
                <CarouselCustom />
            </div>
        </>
    )
}
export default HomePage