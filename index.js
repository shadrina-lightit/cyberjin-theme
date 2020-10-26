'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var palette = {
    primary: {
        main: '#379478',
        light: '#6CC2A8',
        lightest: '#EAF6F3',
    },
    text: {
        primary: '#232A36',
        secondary: '#657082',
        hint: '#ABBCBE',
    },
    background: {
        default: '#F2F5F9',
    },
    divider: '#D3DAE2',
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

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

// custom styles for react-select package
var selectStyle = function (_a) {
    var theme = _a.theme, _b = _a.option, option = _b === void 0 ? function () { return ({}); } : _b, _c = _a.dropdownIndicator, dropdownIndicator = _c === void 0 ? function () { return ({}); } : _c, _d = _a.clearIndicator, clearIndicator = _d === void 0 ? function () { return ({}); } : _d, _e = _a.control, control = _e === void 0 ? function () { return ({}); } : _e, _f = _a.container, container = _f === void 0 ? function () { return ({}); } : _f, _g = _a.singleValue, singleValue = _g === void 0 ? function () { return ({}); } : _g, _h = _a.multiValue, multiValue = _h === void 0 ? function () { return ({}); } : _h, _j = _a.menu, menu = _j === void 0 ? function () { return ({}); } : _j;
    return ({
        option: function (provided, state) { return (__assign(__assign(__assign({}, provided), { cursor: 'pointer', color: theme.palette.text.primary, backgroundColor: state.isFocused ? theme.palette.background.default : theme.palette.common.white, padding: '.8rem 1.2rem' }), option(state))); },
        container: function (provided) { return (__assign(__assign({}, provided), container())); },
        control: function (provided) { return (__assign(__assign(__assign({}, provided), { minHeight: 60, paddingLeft: '.8rem', fontSize: 18, fontFamily: 'Poppins, sans-serif', background: theme.palette.background.default, borderColor: 'transparent !important', boxShadow: 'transparent', '&:hover': {
                borderColor: 'transparent',
                boxShadow: 'none',
            } }), control())); },
        multiValue: function (provided) { return (__assign(__assign(__assign({}, provided), { backgroundColor: '#6CC2A8', padding: '2px 4px', border: 'none', color: 'white', borderRadius: 4, '& > div:first-child': {
                color: 'inherit',
            }, '& > div:last-child': {
                cursor: 'pointer',
                '&:hover': {
                    background: 'transparent',
                },
            } }), multiValue())); },
        multiValueRemove: function () { return ({
            '& svg': {
                display: 'none',
            },
            '&:before': {
                content: '""',
                width: 12,
                height: 12,
                display: 'block',
                marginTop: 8,
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='6' fill='white'/%3E%3Cpath d='M8 4L4 8' stroke='%236CC2A8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M4 4L8 8' stroke='%236CC2A8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A\")",
            },
        }); },
        indicatorSeparator: function () { return ({
            display: 'none',
        }); },
        // valueContainer: () => ({
        //   padding: 0,
        // }),
        dropdownIndicator: function (provided) { return (__assign(__assign(__assign({}, provided), { position: 'relative', cursor: 'pointer', color: theme.palette.text.secondary }), dropdownIndicator())); },
        clearIndicator: function (provided) { return (__assign(__assign(__assign({}, provided), { cursor: 'pointer' }), clearIndicator())); },
        // loadingIndicator: () => ({
        //   display: 'none',
        // }),
        menu: function (provided) { return (__assign(__assign(__assign({}, provided), { zIndex: 10 }), menu())); },
        singleValue: function (provided) { return (__assign(__assign(__assign({}, provided), { color: theme.palette.text.primary }), singleValue())); },
    });
};

var _a, _b;
var reactDatepickerScss = (_a = {
        '.react-datepicker-wrapper': __assign(__assign({}, MuiInputBase.root), { padding: '.8rem 1.2rem !important', width: '100%', '& input': {
                width: '100%',
                background: 'transparent',
                border: 'none',
                padding: '6px 0 7px',
                height: '1.1876em',
                fontSize: 'inherit',
                boxSizing: 'content-box',
                outline: 'none',
                color: 'inherit',
            } }),
        '.react-datepicker': (_b = {
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
                    backgroundColor: palette.background.default + " !important",
                    backgroundPosition: 'center !important',
                    borderRadius: 4,
                    '&--previous': {
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M15.41 16.09L10.83 11.5L15.41 6.91L14 5.5L8 11.5L14 17.5L15.41 16.09Z' fill='%23657082'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A\") !important",
                        left: '1rem !important',
                    },
                    '&--next': {
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M8.59 7.91L13.17 12.5L8.59 17.09L10 18.5L16 12.5L10 6.5L8.59 7.91Z' fill='%23657082'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='24' height='24' fill='white' transform='translate(24 24) rotate(-180)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A\") !important",
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
                }
            },
            _b["&__year-text--selected,\n      &__day--in-range,\n      &__day--selected"] = {
                borderRadius: '4px !important',
                backgroundColor: palette.primary.light + " !important",
                color: 'white !important',
            },
            _b['&__year, &__year-text'] = {
                paddingTop: '.25rem !important',
                paddingBottom: '.25rem !important',
            },
            _b['&__year-text--keyboard-selected'] = {
                border: "1px solid " + palette.primary.light + " !important",
                backgroundColor: 'transparent !important',
                color: 'inherit !important',
            },
            _b),
        '.react-datepicker__month': {
            margin: '0 1rem 1rem !important',
        },
        '.react-datepicker__day--outside-month': {
            color: palette.text.secondary + " !important",
        }
    },
    _a[".react-datepicker__day,\n  .react-datepicker__day-name"] = {
        margin: '0 !important',
        padding: '.25rem',
        width: '33px !important',
        height: '33px !important',
        outline: 'none',
    },
    _a['.react-datepicker__day--keyboard-selected'] = {
        background: 'unset !important',
        color: 'unset !important',
    },
    _a['.react-datepicker__close-icon'] = {
        paddingRight: '0 !important',
        '&:after': {
            backgroundColor: 'transparent !important',
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 6L6 18' stroke='%23ABBCBE' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6 6L18 18' stroke='%23ABBCBE' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A\")",
            content: '"" !important',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        },
    },
    _a);

var theme = {
    palette: palette,
    baseSelectors: baseSelectors,
    components: components,
};
var selectStyle$1 = selectStyle;
var datepickerCss = reactDatepickerScss;

exports.datepickerCss = datepickerCss;
exports.default = theme;
exports.selectStyle = selectStyle$1;
