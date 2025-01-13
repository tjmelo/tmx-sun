import { NavLink } from "react-router";
import './Menu.scss';

import DeviceHubOutlinedIcon from '@mui/icons-material/DeviceHubOutlined';
import { Button, Typography } from "@mui/material";

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
                <li>
                    <NavLink to="/tmx-mercury">
                        <Button 
                            variant="outlined" 
                            startIcon={<DeviceHubOutlinedIcon fontSize='small' />}>
                            TMX Mercury
                        </Button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tmx-venus">
                        <Button 
                            variant="outlined" 
                            startIcon={<DeviceHubOutlinedIcon fontSize='small' />}>
                            TMX Venus
                        </Button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tmx-earth">
                        <Button 
                            variant="outlined" 
                            startIcon={<DeviceHubOutlinedIcon fontSize='small' />}>
                            TMX Earth
                        </Button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tmx-moon">
                        <Button 
                            variant="outlined" 
                            startIcon={<DeviceHubOutlinedIcon fontSize='small' />}>
                            TMX Moon
                        </Button>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}