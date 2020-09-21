var palette = {
    primary: {
        main: '#379478',
        light: '#2AD9A4',
    },
    text: {
        secondary: '#657082',
    },
    background: {
        default: '#F2F5F9',
    },
};

var baseSelectors = {
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
        listStyleImage: "url(" + '/assets/icons/list-item.svg' + ")",
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
};

var MuiButton = {
    root: {
        fontSize: '1.125rem',
        lineHeight: 1,
        paddingTop: '1.25rem',
        paddingBottom: '1.25rem',
        fontFamily: 'ProximaNovaRegular, sans-serif',
    },
    containedPrimary: {
        boxShadow: '0px 4px 100px rgba(61, 202, 159, 0.2), 0px 0px 20px rgba(34, 182, 137, 0.3)',
        '&:hover': {
            boxShadow: '0px 4px 150px rgba(61, 202, 159, 0.2), 0px 0px 15px rgba(34, 182, 137, 0.3)',
        },
    },
};

var MuiDialog = {
    paper: {
        margin: '1.5rem',
    },
};

var MuiInputBase = {
    root: {
        background: '#EFF3F8',
        borderRadius: 3,
        padding: '.875rem 1.2rem',
        fontSize: '1.125rem',
        fontFamily: 'Poppins, sans-serif',
        // color: palette.text.secondary,
        '&$error': {
            color: 'red',
        },
    },
};

var components = {
    MuiButton: MuiButton,
    MuiDialog: MuiDialog,
    MuiInputBase: MuiInputBase,
};

var theme = {
    palette: palette,
    baseSelectors: baseSelectors,
    components: components,
};

export default theme;
