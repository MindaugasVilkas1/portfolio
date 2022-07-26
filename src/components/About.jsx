import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
const About = ({t}) => {
  const Root = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      width: "100%",

    },
    [theme.breakpoints.up('md')]: {
      width: "60%",
    },
    [theme.breakpoints.up('lg')]: {
      width: "60%",
    },
  }));
  return (
    <Root>
      <Box
        sx={{ backgroundColor: 'primary.light', }}>
        <Typography variant="h6" gutterBottom component="div">
          {t('profile.1')}
        </Typography>

      </Box>
    </Root>
  );
}

export default About;