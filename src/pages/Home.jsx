import Layout from "../components/Layout";
import About from "../components/About";
import { styled } from '@mui/material/styles';
const Home = ({ t }) => {
    const Root = styled('div')(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            width: "100%",

        },
        [theme.breakpoints.up('md')]: {
            display: "flex"
        },
        [theme.breakpoints.up('lg')]: {
            display: "flex",
        },
    }));
    return (
        
        <Root>
            <Layout 
            t={t}
            />
            <About 
            t={t}
            />
        </Root>
    );
}

export default Home;