type TObject = { [key: string]: any };
type StyleObject = { [key: string]: string | number } | {};
type TStyleArgs = {
  theme: any;
  option?: (state?: any) => StyleObject;
  dropdownIndicator?: (state?: any) => StyleObject;
  clearIndicator?: (state?: any) => StyleObject;
  control?: (state?: any) => StyleObject;
  container?: (state?: any) => StyleObject;
  singleValue?: (state?: any) => StyleObject;
  multiValue?: (state?: any) => StyleObject;
  menu?: (state?: any) => StyleObject;
};

// custom styles for react-select package
const selectStyle = ({
  theme,
  option = (): StyleObject => ({}),
  dropdownIndicator = (): StyleObject => ({}),
  clearIndicator = (): StyleObject => ({}),
  control = (): StyleObject => ({}),
  container = (): StyleObject => ({}),
  singleValue = (): StyleObject => ({}),
  multiValue = (): StyleObject => ({}),
  menu = (): StyleObject => ({}),
}: TStyleArgs): TObject => ({
  option: (provided: TObject, state: TObject): StyleObject => ({
    ...provided,
    cursor: 'pointer',
    color: theme.palette.text.primary,
    backgroundColor: state.isFocused ? theme.palette.background.default : theme.palette.common.white,
    padding: '.8rem 1.2rem',
    ...option(state),
  }),
  container: (provided: TObject): StyleObject => ({
    ...provided,
    ...container(),
  }),
  control: (provided: TObject): StyleObject => ({
    ...provided,
    minHeight: 60,
    paddingLeft: '.8rem',
    fontSize: 18,
    fontFamily: 'Poppins, sans-serif',
    background: theme.palette.background.default,
    borderColor: 'transparent !important',
    boxShadow: 'transparent',
    '&:hover': {
      borderColor: 'transparent',
      boxShadow: 'none',
    },
    ...control(),
  }),
  multiValue: (provided: TObject): StyleObject => ({
    ...provided,
    backgroundColor: '#6CC2A8',
    padding: '2px 4px',
    border: 'none',
    color: 'white',
    borderRadius: 4,
    '& > div:first-child': {
      color: 'inherit',
    },
    '& > div:last-child': {
      cursor: 'pointer',
      '&:hover': {
        background: 'transparent',
      },
    },
    ...multiValue(),
  }),
  multiValueRemove: (): StyleObject => ({
    '& svg': {
      display: 'none',
    },
    '&:before': {
      content: '""',
      width: 12,
      height: 12,
      display: 'block',
      marginTop: 8,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='6' fill='white'/%3E%3Cpath d='M8 4L4 8' stroke='%236CC2A8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M4 4L8 8' stroke='%236CC2A8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
    },
  }),
  indicatorSeparator: (): StyleObject => ({
    display: 'none',
  }),
  // valueContainer: () => ({
  //   padding: 0,
  // }),
  dropdownIndicator: (provided: TObject): StyleObject => ({
    ...provided,
    position: 'relative',
    cursor: 'pointer',
    color: theme.palette.text.secondary,
    ...dropdownIndicator(),
  }),
  clearIndicator: (provided: TObject): StyleObject => ({
    ...provided,
    cursor: 'pointer',
    ...clearIndicator(),
  }),
  // loadingIndicator: () => ({
  //   display: 'none',
  // }),
  menu: (provided: TObject): StyleObject => ({
    ...provided,
    zIndex: 10,
    ...menu(),
  }),
  singleValue: (provided: TObject): StyleObject => ({
    ...provided,
    color: theme.palette.text.primary,
    ...singleValue(),
  }),
});

export default selectStyle;
