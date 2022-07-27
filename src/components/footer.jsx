import { Box, Typography } from "@mui/material";
const Footer = () => {
    return ( 
        <Box sx={{
            backgroundColor: 'primary.main',
            padding: '10px',
            alignItems: 'center',
            '&:hover': {
                backgroundColor: 'primary.light',
            }
        }}>
            <Typography variant="h6" sx={{fontSize:"10px"}}>© 2022 Mindaugas Vilkas</Typography>
        </Box>
     );
}
 
export default Footer;