import { DefaultTheme } from 'styled-components';

const calcRem = (size: number) => `${size / 16}rem`;

const fontSizes = {
  xs: calcRem(12),
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(20),
  xl: calcRem(24),
  title: calcRem(32),
  titleL: calcRem(40),
};

const fontWeights = {
  small: 300,
  base: 400,
  lg: 500,
  xl: 700,
};

const colors = {
  basic: '#6EF5F5',
};

const backgroundColors = {};

export type CalcRemTypes = typeof calcRem;
export type FontSizesTypes = typeof fontSizes;
export type FontWeightsTypes = typeof fontWeights;
export type BackgroundColors = typeof backgroundColors;
export type Colors = typeof colors;

export const theme: DefaultTheme = {
  calcRem,
  fontSizes,
  fontWeights,
  colors,
  backgroundColors,
};
