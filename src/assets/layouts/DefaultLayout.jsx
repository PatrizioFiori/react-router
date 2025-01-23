import { Outlet } from "react-router-dom";
import Header from "../../compontes/Header";
import Footer from "../../compontes/Footer";
import MainNav from "../../compontes/MainNav";

const DefaultLayout = () => {
    return (
        <div>
            <header>
                <MainNav />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
            </footer>
        </div>
    )
}

export default DefaultLayout