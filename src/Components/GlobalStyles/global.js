import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;

        
        ::-webkit-scrollbar {
            width: 4px;
            height: 4px;
        }
        ::-webkit-scrollbar-button {
             width: 0px;
            height: 0px;
        }
        ::-webkit-scrollbar-thumb {
            background: #e1e1e1;
            border: 0px none #ffffff;
            border-radius: 50px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #ffffff;
        }
        ::-webkit-scrollbar-thumb:active {
            background: #949494;
        }
        ::-webkit-scrollbar-track {
            background: #666666;
            border: 0px none #ffffff;
            border-radius: 50px;
        }
        ::-webkit-scrollbar-track:hover {
            background: #4f4f4f;
        }
        ::-webkit-scrollbar-track:active {
            background: #525252;
        }
        ::-webkit-scrollbar-corner {
            background: transparent;
        }

    }

`
export default GlobalStyle