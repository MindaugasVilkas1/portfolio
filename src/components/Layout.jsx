import * as React from 'react';
import "../styles/foto.css"
import "../styles/contacts.css"
import foto from '../images/foto.jpg'
import {Box, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Grid  } from '@mui/material';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import CakeIcon from '@mui/icons-material/Cake';
import { styled } from '@mui/material/styles';
const Layout = ({t}) => {
    // media queries
    const Root = styled('div')(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            height: "auto",
        },
        [theme.breakpoints.up('md')]: {
            width: "40%",
            height: "auto",
            borderRight:"2px solid grey",
        },
        [theme.breakpoints.up('lg')]: {
            width: "40%",
            height: "auto",
            borderRight:"2px solid grey",
        },
    }));
    return (
        <Root>
            <Box
                sx={{ backgroundColor: 'primary.light', }}>
                <img className="foto" alt="foto" src={foto} />
                <Typography
                    variant="h4" gutterBottom component="div">
                    Mindaugas Vilkas
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                {t('title.1')}
                </Typography>
                <List sx={{
                    width: '100%', maxWidth: 300, bgcolor: 'primary.light', margin: '0 auto'
                }}>
                    <ContactsOutlinedIcon />
                    <Typography variant="h6" gutterBottom component="div">
                    {t('contact.1')}
                    </Typography>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BadgeOutlinedIcon sx={{ color: 'black' }}
                                />
                            </Avatar>
                        </ListItemAvatar >
                        <ListItemText primary={t('contact.2')}secondary="Mindaugas Vilkas" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ContactPhoneOutlinedIcon sx={{ color: 'black' }} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={t('contact.3')} secondary="+37067786956" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <MailOutlinedIcon sx={{ color: 'black' }} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={t('contact.4')} secondary="mindaugasvilkas3@yahoo.com" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <LinkedInIcon sx={{ color: 'black' }} />
                            </Avatar>
                        </ListItemAvatar>
                        <a className='linkedin'
                            href='https://www.linkedin.com/in/mindaugas-vilkas-118137244' target="_blank" rel="noreferrer">
                            <ListItemText

                                primary="Linkedin" />
                        </a>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <HomeOutlinedIcon sx={{ color: 'black' }} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={t('contact.5')} secondary={t('contact.7')}/>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <CakeIcon sx={{ color: 'black' }} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={t('contact.6')} secondary="1984-04-21" />
                    </ListItem>
                </List>
                <Typography variant="h6" gutterBottom component="div">
                {t('skills.1')}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={4} md={6}>
                        <ListItemText secondary="HTML5" />
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <ListItemText secondary="CSS" />
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <ListItemText secondary="JavaScript" />
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <ListItemText secondary="Node JS" />
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <ListItemText secondary="My SQL" />
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <ListItemText secondary="TypeScript" />
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <ListItemText secondary="React JS" />
                    </Grid>
                </Grid>
            </Box>
        </Root >
    );
}

export default Layout;
