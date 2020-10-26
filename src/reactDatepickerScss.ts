import palette from './palette';
import MuiInputBase from './components/MuiInputBase';

export default {
  '.react-datepicker-wrapper': {
    ...MuiInputBase.root,
    padding: '.8rem 1.2rem !important',
    width: '100%',
    '& input': {
      width: '100%',
      background: 'transparent',
      border: 'none',
      padding: '6px 0 7px',
      height: '1.1876em',
      fontSize: 'inherit',
      boxSizing: 'content-box',
      outline: 'none',
      color: 'inherit',
    },
  },
  '.react-datepicker': {
    border: 'none !important',
    marginLeft: '-.5rem',
    backgroundColor: 'white !important',
    boxShadow: '2px 7px 19px 0px rgba(0,0,0,0.25)',
    fontFamily: 'inherit !important',
    '&__year-wrapper': {
      maxWidth: '280px !important',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
    '&__triangle': {
      display: 'none',
    },
    '&__navigation': {
      top: '1rem !important',
      border: 'none !important',
      backgroundRepeat: 'no-repeat !important',
      width: '40px !important',
      height: '40px !important',
      outline: 'none',
      backgroundColor: `${palette.background.default} !important`,
      backgroundPosition: 'center !important',
      borderRadius: 4,
      '&--previous': {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M15.41 16.09L10.83 11.5L15.41 6.91L14 5.5L8 11.5L14 17.5L15.41 16.09Z' fill='%23657082'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") !important`,
        left: '1rem !important',
      },
      '&--next': {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M8.59 7.91L13.17 12.5L8.59 17.09L10 18.5L16 12.5L10 6.5L8.59 7.91Z' fill='%23657082'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='24' height='24' fill='white' transform='translate(24 24) rotate(-180)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") !important`,
        right: '1rem !important',
      },
    },
    '&__header': {
      background: 'transparent !important',
      borderBottom: 'none !important',
      paddingTop: '1.5rem !important',
      '&--custom': {
        paddingBottom: '1.5rem !important',
        '& button': {
          height: '20px !important',
        },
      },
    },
    '&__current-month': {
      fontSize: '16px !important',
      paddingBottom: '.5rem !important',
    },
    [`&__year-text--selected,
      &__day--in-range,
      &__day--selected`]: {
      borderRadius: '4px !important',
      backgroundColor: `${palette.primary.light} !important`,
      color: 'white !important',
    },
    '&__year, &__year-text': {
      paddingTop: '.25rem !important',
      paddingBottom: '.25rem !important',
    },
    '&__year-text--keyboard-selected': {
      border: `1px solid ${palette.primary.light} !important`,
      backgroundColor: 'transparent !important',
      color: 'inherit !important',
    },
  },

  '.react-datepicker__month': {
    margin: '0 1rem 1rem !important',
  },
  '.react-datepicker__day--outside-month': {
    color: `${palette.text.secondary} !important`,
  },
  [`.react-datepicker__day,
  .react-datepicker__day-name`]: {
    margin: '0 !important',
    padding: '.25rem',
    width: '33px !important',
    height: '33px !important',
    outline: 'none',
  },

  '.react-datepicker__day--keyboard-selected': {
    background: 'unset !important',
    color: 'unset !important',
  },
  '.react-datepicker__close-icon': {
    paddingRight: '0 !important',
    '&:after': {
      backgroundColor: 'transparent !important',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 6L6 18' stroke='%23ABBCBE' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6 6L18 18' stroke='%23ABBCBE' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
      content: '"" !important',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  },
};
