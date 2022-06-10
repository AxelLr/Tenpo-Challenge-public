import React from 'react';
import {DefaultTheme, ThemeProvider} from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    lightGray: '#F2F2F2',
    lightGraySecondary: '#ADADAD',
    lightGreen: '#D4F9F5',
    green: '#00BAA4',
    darkGreen: '#008F7E',
    white: '#FFF',
    dark: '#333',
    gray: '#5A5A5A',
    black: '#000',
    crow: '#1F1A17',
    red: '#DD0020',
  },

  fontFamily: {
    gothamBold: 'Gotham-Bold',
    gothamBook: 'Gotham-Book',
  },
};

const Theme: React.FC = ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
