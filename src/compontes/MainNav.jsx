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
        path: "/contatti",
        link: "Contatti"

    },
    {
        id: 4,
        path: "/elenco-post",
        link: "Posts"

    },
    {
        id: 5,
        path: "/nuovo-post",
        link: "Crea post"

    },
]

const MainNav = () => {
    return (
        <div className="NavBar">
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