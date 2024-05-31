import React from "react"
import { NAVIGATION } from "../../const"
import s from './Navbar.module.css'

const Navbar: React.FC = () => {


    return (
        <div className={s.container}>
            <ul className={s.ul}>
                {
                    Object.entries(NAVIGATION).map(([key, {literal, href}]) =>
                        <li key={key} className={s.li}>
                            <a
                                href={href}
                                className={s.link}
                            >
                                {literal}
                            </a>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Navbar
