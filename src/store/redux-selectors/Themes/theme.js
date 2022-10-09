import { createMuiTheme } from '@material-ui/core/styles';

const createSCTheme = () => {
  const theme = {
    pink: '#EF476F',
    mattpurple: '#7F53A3',
    yellow: '#FFD166',
    orange: '#FF9319',
    darkgray: '#363537',
    midlightgray: '#dcd4d4',
    lightblue: '#068D9D',
    lightgray: '#F8F8F8',
    mediumgray: '#d8d8d8',
    mediumlightgray: '#e6e6e6',
    hovergray: '#e8e8e8',
    red: '#cd1212',
    transparentGrayBorder: 'rgba(227, 227, 227, 0.98)',
    warning: 'orange',
    error: '#cd1212',
    danger: '#cd1212',
    dangerLight: '#f21919',
    windowWidthHalf: `${window.innerWidth / 2}px`,
    navHeight: '65px',
    buttonBorderRadius: '20px',
    buttonBoxShadow: '0px 3px 5px rgba(0, 0, 0, 0.15)',
    boxShadow: '0px 2px 2px #d8d8d8',
    mainFont: 'AvenirNext',
    textDark: '#363537',
    textActive: '#02AF88',
    textActiveLight: '#01d9a9',
    textBlack: 'black',
    primary: '#003399',
    primaryLight: '#0347ce',
    primaryLightest: '#013499',
    secondary: '#02AF88',
    secondaryLight: '#01d9a9',
    secondaryLightest: '#07cda1',
    surprisinglyPopular: '#EF8354',
    surprisinglyUnpopular: '#B72AB5',
    agreement: '#003399',
    predictionScore: '#02AF88',
    predictionPercent: 'rgb(6, 191, 184)',
    predictionPercentMedium: 'rgb(6, 191, 184, 0.5)',
    predictionPercentLight: 'rgb(6, 191, 184, 0.5)',
    disconnect: '#85F3FF',
    diversity: '#FFB2E6',
    hidden: '#F5E960',
    alignment: '#CFADFF',
    promptA: 'rgb(255, 152, 0)',
    promptAMediumTrans: 'rgba(255, 152, 0, 0.5)',
    promptALightTrans: 'rgba(255, 152, 0, 0.3)',
    promptB: 'rgb(156, 39, 176)',
    promptBMediumTrans: 'rgba(156, 39, 176, 0.5)',
    promptBLightTrans: 'rgba(156, 39, 176, 0.3)',
    promptABOverlap: 'rgb(206, 96, 88)',
    promptABOverlapMediumTrans: 'rgba(206, 96, 88, 0.5)',
    submitButtonBackground: '#0068b7',
  };
  return theme;
};

const createMUITheme = () => {
  const muiTheme = createMuiTheme({
    palette: {
      primary: {
        light: '#3e74de',
        // main: '#152556',
        main: '#003399',
        dark: '#003399',
        contrastText: '#fff',
      },
      secondary: {
        light: '#02AF88',
        main: '#02AF88',
        dark: '#02AF88',
        contrastText: '#fff',
      },
      action: {
        // selected: '#E7A615',
        // hover: '#FFD371',
        // disabled: '#9B9B9B',
      },
    },
    typography: {
      useNextVariants: true,
      fontFamily: `"AvenirNext", "Helvetica", "Arial", sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
    datePicker: {
      selectColor: '#003399',
    },
    MuiOutlinedInput: {
      root: {
        position: 'relative',
        '& $notchedOutline': {
          borderColor: 'rgba(0, 0, 0, 0.23)',
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: '#4A90E2',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            borderColor: 'rgba(0, 0, 0, 0.23)',
          },
        },
        '&$focused $notchedOutline': {
          borderColor: '#4A90E2',
          borderWidth: 1,
        },
      },
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: '#4A90E2',
        },
      },
    },
  });
  return muiTheme;
};

const getTheme = () => {
  // const t = await fetchTheme()
  const t = null;
  const appTheme = {};
  appTheme.sc = createSCTheme(t);
  appTheme.mui = createMUITheme(t);
  return appTheme;
};

export default getTheme;
