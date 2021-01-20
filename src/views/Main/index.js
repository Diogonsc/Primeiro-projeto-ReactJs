import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import NavHeader from '../../components/NavHeader';
import MyCards from '../../components/MyCards';
import Footer from '../../components/Footer';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const cards = [
  {
    id: 1,
    image: 'https://cdn.pixabay.com/photo/2014/05/02/21/49/laptop-336373_960_720.jpg',
    title: 'Notebook',
    description: 'Notebook na mesa de trabalho.',
  },
  {
    id: 2,
    image: 'https://cdn.pixabay.com/photo/2016/03/09/09/17/computer-1245714_960_720.jpg',
    title: 'Developing',
    description: 'Desenvolvendo uma aplicação react-native.',
  },
  {
    id: 3,
    image: 'https://cdn.pixabay.com/photo/2017/12/28/22/03/lens-3046269_960_720.jpg',
    title: 'Photography',
    description: 'A arte de ver o mundo através das lentes.',
  },
  {
    id: 4,
    image: 'https://cdn.pixabay.com/photo/2016/12/01/18/17/mobile-phone-1875813_960_720.jpg',
    title: 'phone',
    description: 'O Mundo na palma de suas mãos.',
  },
  {
    id: 5,
    image: 'https://cdn.pixabay.com/photo/2014/10/23/20/51/iphone-500291_960_720.jpg',
    title: 'Connect You',
    description: 'O melhor da técnologia na palma da sua mão.',
  },
  {
    id: 6,
    image: 'https://cdn.pixabay.com/photo/2017/06/29/10/28/games-2453777_960_720.jpg',
    title: 'Control Ps4 e Xbox',
    description: 'Controle PS4 e XBOX na versão preta.',
  },
];

function App() {
  const classes = useStyles();

  return (
    <>
    <NavHeader></NavHeader>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Lista de Técnologias
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
             Esse é o meu primeiro projeto, nele aprendi a criar arrays de objetos, components, sobre props e muito mais.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Entrar
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Cancelar
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <MyCards data={cards}/>
        </Container>
      </main>
        <Footer/>
    </>
  );
}

export default App;
