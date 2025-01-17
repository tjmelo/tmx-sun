import './Menu.scss';

import { Button, Typography } from "@mui/material";
import { MENUS } from "../../types";
import { useLocation } from 'react-router';

export const HostMenu = () => {
      const { pathname } = useLocation();

    return (
        <nav className='HostMenu'> 
            <ul>
                <li>
                    <a href={`/`} className="Link-logo">
                        <img src="tmwd.png" width="25%" alt="" />
                    </a>
                </li>
                <li>
                    <Typography variant="caption">Lista de projetos disponíveis</Typography>
                </li>
                
                {
                    Object.keys(MENUS).map((menu) => {
                        return (
                            <li key={menu}>
                                <a 
                                    href={`/tmx-${menu.toLowerCase()}`} 
                                    className={pathname.includes(menu.toLowerCase()) ? 'active' : ''}
                                >
                                    <Button
                                        variant="outlined">
                                        {menu}
                                    </Button>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
