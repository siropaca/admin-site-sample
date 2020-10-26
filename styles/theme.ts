import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#303f9f',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(7, 9, 25, 0.5)'
    },
    background: {
      paper: '#fff',
      default: '#fafafa'
    },
    common: {
      black: '#000',
      white: '#fff'
    }
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 320,
      sm: 560, // スマホ
      md: 960, // タブレット
      lg: 1280, // ラップトップ
      xl: 1920 // デスクトップ
    }
  },
  typography: {
    fontFamily:
      '-apple-system,BlinkMacSystemFont,Helvetica Neue,Segoe UI,Hiragino Kaku Gothic ProN,Hiragino Sans,ヒラギノ角ゴ ProN W3,Arial,メイリオ,Meiryo,sans-serif',
    fontSize: 15
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        fontWeight: 700,
        letterSpacing: '0.05rem'
      }
    },
    MuiAppBar: {
      root: {
        boxShadow: 'none'
      }
    }
  }
});

export default theme;
