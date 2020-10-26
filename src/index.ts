import palette from './palette';
import baseSelectors from './baseSelectors';
import components from './components/index';
import reactSelectStyle from './reactSelectStyle';
import reactDatepickerScss from './reactDatepickerScss';

const theme = {
  palette,
  baseSelectors,
  components,
};

export const selectStyle = reactSelectStyle;
export const datepickerCss = reactDatepickerScss;

export default theme;