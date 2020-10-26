import Link from 'next/link';
import useSWR from 'swr';
import LoginForm from '../components/loginForm';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      height: '100vh',
      width: '100vw',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(/images/login_bg.jpg)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
);

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LoginForm />
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      layout: false,
      darkMode: true
    }
  };
}
