import { createGlobalStyle } from 'styled-components';
import AvenirNextRegular from '../styles/avenir-next-lt-pro/AvenirNextLTPro-Regular.woff';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'AvenirNext';
    src: url(${AvenirNextRegular});
  }

  html {
    font-family: 'AvenirNext', sans-serif;
  }
  body {
    font-family: 'AvenirNext', sans-serif;
    margin: 0;
  }

  p, h1, h2, h3, h4, h5, h6, div {
    font-family: 'AvenirNext', sans-serif;
  }
  div {
      /* -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: transparent; */
  }

  button, input {
    font-family: 'AvenirNext', sans-serif;
  }

  input, button, div {
    -webkit-appearance: none;
    font-family: 'AvenirNext', sans-serif;
    &:focus {
      outline: 0;
    }
  }

  .searchDrawerContents {
    width: 500px;
  }
  @media screen and (max-width: 500px) {
    .searchDrawerContents {
      width: 100vw;
      min-width: 100vw;
    }
  }

  .dialog-section {
    padding: 10px;
  }

  .pop-slider {
    padding: 30px 30px 0 30px;
    max-width: 320px;
    .pop-close {
      position: absolute;
      top: 5px;
      right: 5px;
      button {
        align-self: flex-end !important;
        svg {
          width: 0.9rem;
          height: 0.9rem;
        }
      }
    }

    .question {
      font-size: 1.1rem;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .option {
        cursor: pointer;
        position: relative;
        background: white;
        /* border-radius: 30px; */
        border-radius: 15px;
        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
        padding: 15px;
        text-align: center;
        margin: 15px 0;
        font-size: 18px;
        animation-duration: 1s;
        animation-name: fadein;
    }
    .pop-over-footer {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .icon {
      width: 40px;
      height: 40px;
        button {
          height: 40px;
          width: 40px;
        }
    }
    .next-button {
        border: none;
        width: 100px;
        background: #02AF88;
        color: white;
        border-radius: 5px;
        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
        display: block;
        margin: 15px auto;
        height: 40px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        font-size: 1.1rem;
        font-weight: bold;
        transition: background-color 0.2s ease-in-out;

        &:hover {
          /* transform: translateY(-2px); */
        }
    }

    


    .a {
      background: #003399;
    }
    .b {
      background: #02AF88;
    }
    .c {
      background: #018EA2;
    }
  }

  .pop-small {
    max-width: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px 5px 15px 15px;
      .pop-text {
          /* padding: 20px; */
          .title {
            font-weight: bold;
            font-size: 1.2rem;
          }
          .description {
            
          }
        }
    .pop-close {
      align-self: flex-end !important;
      button {
        height: 50px;
        width: 50px;
        margin: 5px;
        svg {
          width: 0.9rem;
          height: 0.9rem;
        }
      }
    }
  }
  
  .ant-picker-dropdown.ant-picker-dropdown-placement-bottomLeft {
    z-index: 999999;
    button {
      background: #003399;
      color: white;
      border: none;
      border-radius: 5px;
      &:hover {
        background: #02AF88;

      }
    }
  }


`;

export default GlobalStyles;
