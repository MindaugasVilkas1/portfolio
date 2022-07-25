import { styled } from '@mui/material/styles';
const About = () => {
    const Root = styled('div')(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
          width:"100%",
        
        },
        [theme.breakpoints.up('md')]: {
            width:"60%",
        },
        [theme.breakpoints.up('lg')]: {
            width:"60%",
        },
      }));
    return ( 
        <Root>
        <h1>About</h1>
        </Root>
     );
}
 
export default About;