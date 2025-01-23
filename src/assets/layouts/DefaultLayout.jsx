import { Outlet } from "react-router-dom";
import Header from "../../compontes/Header";
import Footer from "../../compontes/Footer";

const DefaultLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default DefaultLayout