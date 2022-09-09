import { Box, Typography } from "@mui/material";
const Footer = () => {
    return ( 
        <Box sx={{
            padding: '10px',
            alignItems: 'center',
        }}>
            <Typography variant="h6" sx={{fontSize:"10px"}}>© 2022 Mindaugas Vilkas</Typography>
        </Box>
     );
}
 
export default Footer;