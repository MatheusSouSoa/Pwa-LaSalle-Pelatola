import HomeContent from "../Contents/homeContent/HomeContent";
import Header from "../header/Header";

export default function Home() {

    return (
        <div className="bg-red-500 ">
            <Header/>
            <div className="flex ">
                <HomeContent/>
            </div>
        </div>
    )
}