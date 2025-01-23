import { NavLink } from "react-router-dom";

const arrayLinks = [
    {
        id: 1,
        path: "/",
        link: "Home"

    },
    {
        id: 2,
        path: "/about",
        link: "About"

    },
    {
        id: 3,
        path: "/products",
        link: "Products"

    },
]

const MainNav = () => {
    return (
        <div>
            <ul>
                {arrayLinks.map(item => {
                    return (
                        <li key={item.id}>
                            <NavLink to={item.path}>{item.link}</NavLink>
                        </li>
                    );
                })}

            </ul>
        </div>
    )
}

export default MainNav