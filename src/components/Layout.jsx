import * as React from 'react';
import "../styles/foto.css"
import "../styles/contacts.css"
import foto from '../images/foto.jpg'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import CakeIcon from '@mui/icons-material/Cake';
import { styled } from '@mui/material/styles';

const Layout = () => {
    const Root = styled('div')(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
          width:"100%",
          height: "auto",
        },
        [theme.breakpoints.up('md')]: {
            width:"40%",
        },
        [theme.breakpoints.up('lg')]: {
            width:"40%",
        },
      }));
    return (
        <Root>
            <Box
                sx={{
                    
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                    },
                }}>
                <img className="foto" alt="foto" src={foto} />
                <Typography
                    variant="h4" gutterBottom component="div">
                    Mindaugas Vilkas
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    Junior Front End Developer
                </Typography>
                <ContactsOutlinedIcon />
                <Typography variant="h6" gutterBottom component="div">
                    About and Contact
                </Typography>
                <List sx={{ width: '100%', maxWidth: 300, bgcolor: 'primary.dark', margin: '0 auto' }}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BadgeOutlinedIcon
                                    sx={{ color: 'black' }}
                                />
                            </Avatar>
                        </ListItemAvatar >
                        <ListItemText primary="Name" secondary="Mindaugas Vilkas" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ContactPhoneOutlinedIcon sx={{ color: 'black' }} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Phone Number" secondary="+37067786956" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <MailOutlinedIcon sx={{ color: 'black' }} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Email" secondary="mindaugasvilkas3@yahoo.com" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <HomeOutlinedIcon sx={{ color: 'black' }} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Home Address" secondary="Rygos st.44-25, Vilnius" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <CakeIcon sx={{ color: 'black' }} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Date of Birth" secondary="1984-04-21" />
                    </ListItem>
                </List>
            </Box>
        </Root>
    );
}

export default Layout;
