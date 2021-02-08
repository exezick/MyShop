import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '10vh',
    },
    footer: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(3),
      marginTop: 'auto',
      backgroundColor: '#5E3748',
      color: 'rgba(255,255,255,0.7)',
    },
  }),
);

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container>
          <Typography variant="body2">© MyShop 2021</Typography>
        </Container>
      </footer>
    </div>
  )
}

export default  Footer
