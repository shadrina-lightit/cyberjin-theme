import BaseSelectors from './baseSelectors.d.ts';
import Palette from './palette.d.ts';
import Components from './components.d.ts';

type Object = { [key: string]: any }

export default interface Theme {
  palette: Palette,
  baseSelectors: BaseSelectors,
  components: Components,
}