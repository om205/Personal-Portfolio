import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: ${theme.fonts.body};
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        line-height: 1.6;
        overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${theme.fonts.heading};
        font-weight: 700;
        line-height: 1.2;
    }

    a {
        color: ${theme.colors.accent};
        text-decoration: none;
        transition: ${theme.transitions.default};

        &:hover {
            color: ${theme.colors.primary};
        }
    }

    button {
        cursor: pointer;
        font-family: ${theme.fonts.body};
        transition: ${theme.transitions.default};
    }

    img {
        max-width: 100%;
        height: auto;
    }

    ::selection {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.text};
    }
`;
