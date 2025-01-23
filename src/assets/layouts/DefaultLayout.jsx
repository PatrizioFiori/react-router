import { Outlet } from "react-router-dom";
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