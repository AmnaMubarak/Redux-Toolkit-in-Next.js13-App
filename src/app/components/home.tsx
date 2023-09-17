import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Welcome to Artistic Creations
      </Typography>
      <Typography variant="body1" paragraph>
        Explore the world of art and design on our platform. Discover amazing artworks created by talented artists.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="artwork1.jpg"
              title="Artwork 1"
            />
            <CardContent>
              <Typography variant="h6" component="h2">
                Artwork 1
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Description of Artwork 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="artwork2.jpg"
              title="Artwork 2"
            />
            <CardContent>
              <Typography variant="h6" component="h2">
                Artwork 2
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Description of Artwork 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="artwork3.jpg"
              title="Artwork 3"
            />
            <CardContent>
              <Typography variant="h6" component="h2">
                Artwork 3
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Description of Artwork 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
