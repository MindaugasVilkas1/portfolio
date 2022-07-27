import LanguageIcon from '@mui/icons-material/Language';
import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "../styles/nav.css"

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
                backgroundColor: 'primary.main',
                padding: '10px',
                display: 'flex',
                justifyContent: "space-between",
                alignItems: 'center',
                '&:hover': {
                    backgroundColor: 'primary.light',
                }
            }}>
            <Stack direction="row" spacing={2}>
                <Avatar {...stringAvatar('Mindaugas Vilkas')} />
            </Stack>
            <div className='navigation'>
                <LanguageIcon
                    sx={{ fontSize: 40 }}
                />
                <span>{t('language.1')}</span>
                <ul
                >
                    {languages.map(({ code, country_code, name }) => (
                        <li key={country_code}>
                            <button
                                onClick={() => handleclick(`${code}`)}
                            >
                                <span>
                                    <span className={`fi fi-${country_code}`}></span>{" "}
                                    {name}</span>
                            </button>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </Box>
    );
}

export default Nav;