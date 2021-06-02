import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {Navbar} from 'react-bootstrap';

function Copyright() {
  return (
    <Typography variant="body2" color="white"  >
      {'Copyright © '}
      <Link color="inherit" href="#">
        C-DAC MOHALI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position:'relative',
    bottem: '0px',
     left :'0px',

  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    position:'relative',
    bottem: '0px',
     left :'0px',
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    color:'white',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.dark[800] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Navbar >
      <CssBaseline />
   
      <footer className={classes.footer }>
        <Container maxWidth="sm">
          
          <Copyright />

        </Container>
      </footer>
      </Navbar>
    </div>
  );
}