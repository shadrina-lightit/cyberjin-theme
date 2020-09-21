declare const theme: {
    palette: {
        primary: {
            main: string;
            light: string;
            lightest: string;
        };
        text: {
            secondary: string;
        };
        background: {
            default: string;
        };
    };
    baseSelectors: {
        body: {
            fontSize: number;
            fontFamily: string;
            maxWidth: string;
            overflowX: string;
            '@media (max-width: 599.95px)': {
                fontSize: number;
            };
        };
        'a:not([class*="Button"])': {
            color: string;
            transition: string;
            textDecoration: string;
            '&:hover, &:focus': {
                opacity: number;
            };
        };
        img: {
            maxWidth: string;
        };
        ul: {
            listStyleImage: string;
            paddingLeft: string;
        };
        ol: {
            paddingLeft: string;
        };
        '::-webkit-scrollbar': {
            width: number;
        };
        '::-webkit-scrollbar-thumb': {
            background: string;
        };
    };
    components: {
        MuiButton: {
            root: {
                fontSize: string;
                lineHeight: number;
                paddingTop: string;
                paddingBottom: string;
                fontFamily: string;
            };
            containedPrimary: {
                boxShadow: string;
                '&:hover': {
                    boxShadow: string;
                };
            };
        };
        MuiDialog: {
            paper: {
                margin: string;
            };
        };
        MuiInputBase: {
            root: {
                background: string;
                borderRadius: number;
                padding: string;
                fontSize: string;
                fontFamily: string;
                '&$error': {
                    color: string;
                };
            };
        };
    };
};
export default theme;
