import { css } from 'styled-components'

import UniNeueRegularWOFF from '../fonts/subset-UniNeueRegular.woff'
import UniNeueRegularWOFF2 from '../fonts/subset-UniNeueRegular.woff2'
import UniNeueHeavyWOFF from '../fonts/subset-UniNeueHeavy.woff'
import UniNeueHeavyWOFF2 from '../fonts/subset-UniNeueHeavy.woff2'


export const fontFaces = css`
  @font-face {
    font-family: 'Uni Neue';
    src: local('Uni Neue Regular Italic'), local('UniNeueRegular-Italic'),
        url(${UniNeueRegularWOFF2}) format('woff2'),
        url(${UniNeueRegularWOFF}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Uni Neue';
    src: local('Uni Neue Heavy'), local('UniNeueHeavy'),
        url(${UniNeueHeavyWOFF2}) format('woff2'),
        url(${UniNeueHeavyWOFF}) format('woff');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }
`;