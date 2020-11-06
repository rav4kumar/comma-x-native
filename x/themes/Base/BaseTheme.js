import { Colors } from './BaseColors';

export const BaseTheme = {
    colors: { ...Colors },
    text: {
        sizes: {
            tiny: 12,
            small: 14,
            default: 16,
            medium: 18,
            big: 22,
            jumbo: 26,
        },
        weights: {
            light: null,
            regular: null,
            semibold: null,
            bold: null,
        },
        colors: {
            default: Colors.black,
            light: Colors.black,
            darkGrey: Colors.grey900,
            white: Colors.white,
        },
    },
    button: {
        defaults: {
            borderWidth: 2,
            radius: 100,
        },
        sizes: {
            tiny: 42,
            small: 50,
            default: 60,
            medium: 64,
            big: 68,
            jumbo: 72,
            full: '100%',
        },
        colors: {
            ghost: {
                backgroundColor: Colors.transparent,
                borderColor: Colors.transparent,
                alignSelf: 'flex-start',
            },
            default: {
                backgroundColor: Colors.lightGrey500,
                borderColor: Colors.lightGrey400,
            },
            primary: {
                backgroundColor: Colors.blue50,
                borderColor: Colors.blue100,
            },
            transparent: {
                backgroundColor: Colors.transparent,
                borderColor: Colors.lightGrey500,
            },
            inverted: {
                backgroundColor: Colors.transparent,
                borderColor: Colors.white30,
            },
            blue: {
                backgroundColor: Colors.black,
                borderColor: Colors.black,
            },
            red: {
                backgroundColor: Colors.red100,
                borderColor: Colors.red200,
            },
            green: {
                backgroundColor: Colors.green100,
                borderColor: Colors.green200,
            },
        },
    },
    line: {
        sizes: {
            tiny: 0.5,
            small: 1,
            default: 2,
            medium: 5,
            big: 8,
            jumbo: 13,
        },
        spacing: {
            none: 0,
            tiny: 10,
            small: 15,
            default: 20,
            medium: 30,
            big: 40,
            jumbo: 60,
        },
        colors: {
            default: Colors.lightGrey200,
            lightGrey: Colors.lightGrey500,
            darkGrey: Colors.grey900,
            white: Colors.white,
        },
    },
    avatar: {
        defaults: {
            backgroundColor: Colors.lightGrey200,
            borderColor: 'transparent',
            borderRadius: 5,
            borderWidth: 1,
        },
        sizes: {
            tiny: 30,
            small: 40,
            default: 60,
            medium: 80,
            big: 100,
            jumbo: 150,
        },
        colors: {
            default: Colors.lightGrey200,
            white: Colors.white,
        },
    },
    statusBar: {
        types: {
            absolute: {
                zIndex: 100,
            },
        },
    },
    gradient: {
        colors: {
            light_grey: [
                'rgb(245, 246, 246)',
                'rgb(236, 237, 237)'
            ],
            dark_grey: [
                'rgb(8, 8, 8)',
                'rgb(0, 0, 0)'
            ],
            dark_blue: [
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)'
            ],
            blue: [
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)'
            ],
            transparent_white: [
                'white',
                'transparent'
            ],
        },
    },
    checkboxField: {
        sizes: {
            small: 26,
            smallLabel: 17,
            default: 32,
            defaultLabel: 18,
        },
        colors: {
            white: {
                input: Colors.white20,
                inputBorder: Colors.white10,
                inputChecked: 'rgba(0,0,0,.2)',
                inputCheckedIcon: Colors.white50,
                label: Colors.white,
            },
            default: {
                input: Colors.desatBlue800,
                inputBorder: Colors.white50,
                inputChecked: Colors.white20,
                inputCheckedIcon: Colors.blue800,
                label: Colors.desatBlue800,
            },
        },
    },
    radioField: {
        defaults: {
            opacityDisabled: 0.2,
            inputPadding: '3%',
            inputBorderWidth: 1,
            inputBorderWidthChecked: 3,
            checkIconOpacity: 0.8,
            labelPaddingLeft: '5%',
            appendOpacity: 0.3,
            appendOpacityChecked: 0.1,
        },
        sizes: {
            default: 32,
            defaultLabel: 18,
            big: 45,
            bigLabel: 18,
        },
        colors: {
            white: {
                input: Colors.white20,
                inputBorder: Colors.white10,
                inputChecked: 'rgba(0,0,0,.2)',
                inputCheckedIcon: Colors.white50,
                label: Colors.white,
            },
            default: {
                input: Colors.desatBlue800,
                inputBorder: Colors.white50,
                inputChecked: Colors.white20,
                inputCheckedIcon: Colors.blue800,
                label: Colors.desatBlue800,
            },
        },
    },
    table: {
        sizes: {
            default: 'auto',
        },
        spacing: {
            none: 0,
            default: 10,
            big: 20,
        },
        padding: {
            none: 0,
            default: 10,
            big: 20,
        },
        colors: {
            default: Colors.transparent,
            darkBlue: '#0F2537',
        },
        directions: {
            default: 'column',
            row: 'row',
        },
    },
    tableCell: {
        sizes: {
            default: 66,
        },
        spacing: {
            default: 20,
        },
        colors: {
            default: Colors.transparent,
            white: Colors.white,
        },
        states: {
            isExpanded: {
                height: 'auto',
            }
        },
        types: {
            switch: {
                paddingTop: 20,
                paddingBottom: 20,
                transform: [
                    { scaleX: 1.8 },
                    { scaleY: 1.8 }
                ],
            },
            detail: {
                paddingTop: 20,
                paddingBottom: 20,
            },
        },
    },
    tableCellInput: {
        states: {
            isDisabled: {
                opacity: 1.0,
            }
        }
    },
}
