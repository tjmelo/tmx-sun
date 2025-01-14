import { NavLink } from "react-router";
import './Menu.scss';

import { Button, Typography } from "@mui/material";
import { MENUS } from "../../types";

export const HostMenu = () => {
    return (
        <nav className='HostMenu'> 
            <ul>
                <li>
                    <img src="tmwd.png" width="25%" alt="" />
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