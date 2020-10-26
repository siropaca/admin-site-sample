import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '380px',
      borderRadius: '5px',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      padding: theme.spacing(4),
      color: '#fff',
      backdropFilter: 'blur(5px)'
    },
    logo: {
      width: '78%'
    },
    text: {
      marginTop: `${theme.spacing(2)}px`,
      fontWeight: 'bold',
      letterSpacing: '1px'
    },
    textField: {
      margin: `${theme.spacing(1)}px 0 ${theme.spacing(2)}px 0`,
      width: '100%'
    },
    submit: {
      margin: `${theme.spacing(2)}px 0 ${theme.spacing(1)}px`,
      width: '100%'
    }
  })
);

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
  disabled: boolean;
}

function LoginForm(props) {
  const router = useRouter();
  const classes = useStyles();

  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    disabled: false
  });

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    setValues({ ...values, disabled: true });
    router.push('/');
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <img src="/images/logo.png" alt="logo" className={classes.logo} />
      <div className={classes.text}>Welcome!</div>
      <TextField
        id="standard-basic"
        label="Username"
        className={classes.textField}
      />
      <FormControl className={classes.textField}>
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}>
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleSubmit}
        disabled={values.disabled}>
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
