import { NavLink } from "react-router";
import './Menu.scss';

import { Button, Typography } from "@mui/material";
import { MENUS } from "../../types";

export const HostMenu = () => {
    return (
        <nav className='HostMenu'> 
            <ul>
                <li>
                    <NavLink to={`/`} className="Link-logo">
                        <img src="tmwd.png" width="25%" alt="" />
                    </NavLink>
                </li>
                <li>
                    <Typography variant="caption">Lista de projetos disponíveis</Typography>
                </li>
                
                {
                    Object.keys(MENUS).map((menu) => {
                        return (
                            <li key={menu}>
                                <NavLink to={`/tmx-${menu.toLowerCase()}`}>
                                    <Button
                                        variant="outlined">
                                        {menu}
                                    </Button>
                                </NavLink>
                            </li>
                        )
                    })
                }
                
            </ul>
        </nav>
    )
}