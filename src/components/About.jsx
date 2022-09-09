import { styled } from '@mui/material/styles';
import { Box, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';

const About = ({ t }) => {
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
        sx={{ height: "100%" }}>
        <Typography sx={{ textDecoration: "underline" }} variant="h6" gutterBottom component="div">
          {t('profile.1')}
        </Typography>
        <Typography
          sx={{ textAlign: "justify", marginLeft: 5, marginRight: 5, marginBottom: "5px", borderBottom: "2px solid grey", paddingBottom: "5px" }}
        >
          {t('profile.2')}
        </Typography>
        <List sx={{
          width: '100%', maxWidth: 500, margin: '0 auto', borderBottom: "2px solid grey", paddingBottom: "5px"
        }}>
          <Typography sx={{ textDecoration: "underline" }} variant="h6" gutterBottom component="div">
            {t("workExpierence.1")}
          </Typography>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkHistoryIcon sx={{ color: 'black' }}
                />
              </Avatar>
            </ListItemAvatar >
            <ListItemText primary={t("workExpierence.2")} secondary={t("workExpierence.3")}
            />
          </ListItem>
          <ListItem>
            <ListItemText sx={{ textAlign: "justify" }} primary={t("workExpierence.4")}
              secondary={t("workExpierence.5")}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkHistoryIcon sx={{ color: 'black' }}
                />
              </Avatar>
            </ListItemAvatar >
            <ListItemText primary={t("workExpierence.6")} secondary={t("workExpierence.7")}
            />
          </ListItem>
          <ListItem>
            <ListItemText sx={{ textAlign: "justify" }} primary={t("workExpierence.6")}
              secondary={t("workExpierence.8")}
            />
          </ListItem>
        </List>
        <List sx={{
          width: '100%', maxWidth: 500, margin: '0 auto', borderBottom: "2px solid grey", paddingBottom: "5px"
        }}>
          <Typography sx={{ textDecoration: "underline" }} variant="h6" gutterBottom component="div">
            {t("education.1")}
          </Typography>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SchoolIcon sx={{ color: 'black' }}
                />
              </Avatar>
            </ListItemAvatar >
            <ListItemText primary={t("education.2")} secondary={t("education.3")}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SchoolIcon sx={{ color: 'black' }}
                />
              </Avatar>
            </ListItemAvatar >
            <ListItemText primary={t("education.4")} secondary={t("education.5")}
            />
          </ListItem>
        </List>
        <List
          sx={{
            width: '100%', maxWidth: 500, margin: '0 auto', paddingBottom: "5px"
          }}>
          <Typography sx={{ textDecoration: "underline" }} variant="h6" gutterBottom component="div">
            {t("activities.1")}
          </Typography>
          <ListItem>
          <ListItemText primary={t("activities.2")} secondary={t("activities.3")} />
          </ListItem>
          <ListItem>
          <ListItemText primary={t("activities.5")} secondary={t("activities.6")} />
          </ListItem>
          <ListItem>
          <ListItemText primary={t("activities.4")} />
          </ListItem>
        </List>
      </Box>
    </Root>
  );
}

export default About;