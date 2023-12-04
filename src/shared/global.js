
import { css } from '@emotion/react';

// import { color, typography } from './styles';

 export const fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900';

export const bodyStyles = css`
padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
`;

export const GlobalStyle = css`
  body {
    ${bodyStyles}
  }
`;