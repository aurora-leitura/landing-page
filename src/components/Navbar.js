import {React, useState} from "react"
import Logo from "../Assets/Logo.svg"
import {HiOutlineBars3} from "react-icons/hi2"
import { 
    Box, 
    Drawer, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText, 
} from "@mui/material";
import { AiOutlineHome } from "react-icons/ai";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {

    const [openMenu,setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text: "Home",
            icon:<AiOutlineHome className="home-icon"/>
        },
        {
            text: "Sobre",
            icon:<InfoIcon/>
        },
        {
            text: "Comentários",
            icon:<CommentRoundedIcon/>
        },
        {
            text: "Contato",
            icon:<PhoneRoundedIcon/>
        },
    ]

    return(
    <nav>
        <div className="nav-logo-container">
            <img src={Logo} alt="" />
        </div>
        <div className="navbar-links-container" >
            <a href="">Home</a>
            <a href="">Sobre</a>
            <a href="">Comentários</a>
            <a href="">Contato</a>
            <button className="primary-button">Inscreva-se</button>
        </div>
        <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClick={() => setOpenMenu(false)} anchor="right" >
           <Box
           sx={{width: 250}}
           role="presentation"
           onClick={() => setOpenMenu(false)}
           onKeyDown={() => setOpenMenu(false)}
           />
           <List>
            {menuOptions.map((item) =>(
                <ListItem key={item.text} disablePadding >
                    <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItemButton>
                </ListItem>
            )
            )}
           </List>
        </Drawer>
        
    </nav>
    );
}

export default Navbar
