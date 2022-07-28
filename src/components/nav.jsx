import cookie from 'js-cookie'
import { Box, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "../styles/nav.css"
import "flag-icons"
import { useEffect } from 'react';
const Nav = ({ handleclick, t }) => {
    //language properties
    const languages = [
        {
            code: "en",
            name: "English",
            country_code: "gb"
        },
        {
            code: "lt",
            name: "Lietuvių",
            country_code: "lt"
        },
    ]
    // get language from cookie
    const currentLanguageCode = cookie.get('i18next')
    const currentLanguage = languages.find(l => l.code === currentLanguageCode)
    useEffect(() => {
        document.body.dir = currentLanguage.dir
    }, [currentLanguage])
    // avatar
    function stringToColor(string) {
        let hash = 0;
        let i;
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
        let color = '#';
        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        return color;
    }
    //split name
    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }
    return (
        <Box
            sx={{
                backgroundColor: 'primary.light',
                padding: '10px',
                display: 'flex',
                justifyContent: "space-between",
                alignItems: 'center',
            }}>
            <Stack direction="row" spacing={2}>
                <Avatar {...stringAvatar('Mindaugas Vilkas')} />
            </Stack>
            <div className='navigation'>
                <ul
                >
                    {languages.map(({ code, country_code, name }) => (
                        <li key={country_code}>
                            <Button variant="contained"
                                onClick={() => handleclick(`${code}`)}
                                disabled={code === currentLanguageCode}
                            >
                                <span>
                                    <span className={`fi fi-${country_code}`}></span>{" "}
                                    {name}</span>
                            </Button>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </Box>
    );
}

export default Nav;