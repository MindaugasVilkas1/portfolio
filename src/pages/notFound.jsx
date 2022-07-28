import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
const NotFound = ({t}) => {
    return ( 
        <Box sx={{marginTop: '250px', marginBottom: '250px',textAlign: 'center'}}>
            <Typography variant="h6">{t("notFound.1")}</Typography>
            <Typography variant="h6">{t("notFound.2")}</Typography>
            <Link to="/portfolio">{t("notFound.3")}</Link>
        </Box>
     );
}
 
export default NotFound;