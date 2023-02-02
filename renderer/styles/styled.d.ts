import 'styled-components';
import {
  CalcRemTypes,
  ColorsTypes,
  FontSizesTypes,
  FontWeightsTypes,
  BackgroundColorsTypes,
} from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    calcRem: CalcRemTypes;
    colors: ColorsTypes;
    fontSizes: FontSizesTypes;
    fontWeights: FontWeightsTypes;
    backgroundColors: BackgroundColorsTypes;
  }
}
