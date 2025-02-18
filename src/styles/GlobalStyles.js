import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root{
        --Color-Primary-1: #FD377E;
        --Color-Primary-2: #E34981;
        --Color-Secondary: #03B898;
        --Color-Gray-1: #F8F9FA;
        --Color-Gray-2: #E9ECEF;
        --Color-Gray-3: #868E96;
        --Color-Gray-4: #212529;
        --Font-Primary: 'Nunito', sans-serif;

        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    button{
        cursor: pointer;
        background: transparent;
        border: none;
    }

    ul, ol{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    input, textarea{
        border: 0;
        background: transparent;
    }

`