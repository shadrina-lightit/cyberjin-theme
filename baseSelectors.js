import palette from './palette';

export default {
  body: {
    fontSize: 16,
    fontFamily: 'ProximaNovaRegular, sans-serif',
    maxWidth: '100vw',
    overflowX: 'hidden',
    '@media (max-width: 599.95px)': {
      fontSize: 16,
    },
  },
  'a:not([class*="Button"])': {
    color: 'inherit',
    transition: 'opacity .2s',
    textDecoration: 'none',
    '&:hover, &:focus': {
      opacity: 0.85,
    },
  },
  img: {
    maxWidth: '100%',
  },
  ul: {
    listStyleImage: `url(${'/assets/icons/list-item.svg'})`,
    paddingLeft: 'calc(1rem + 10px)',
  },
  ol: {
    paddingLeft: 'calc(1rem + 10px)',
  },
  '::-webkit-scrollbar': {
    width: 10,
  },
  '::-webkit-scrollbar-thumb': {
    background: palette.primary.main,
  },
}