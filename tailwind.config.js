"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("tailwindcss/colors"));
const config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        // Path to Tremor module
        './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        transparent: 'transparent',
        current: 'currentColor',
        extend: {
            colors: {
                // light mode
                tremor: {
                    brand: {
                        faint: colors_1.default.blue[50],
                        muted: colors_1.default.blue[200],
                        subtle: colors_1.default.blue[400],
                        DEFAULT: colors_1.default.blue[500],
                        emphasis: colors_1.default.blue[700],
                        inverted: colors_1.default.white,
                    },
                    background: {
                        muted: colors_1.default.gray[50],
                        subtle: colors_1.default.gray[100],
                        DEFAULT: colors_1.default.white,
                        emphasis: colors_1.default.gray[700],
                    },
                    border: {
                        DEFAULT: colors_1.default.gray[200],
                    },
                    ring: {
                        DEFAULT: colors_1.default.gray[200],
                    },
                    content: {
                        subtle: colors_1.default.gray[400],
                        DEFAULT: colors_1.default.gray[500],
                        emphasis: colors_1.default.gray[700],
                        strong: colors_1.default.gray[900],
                        inverted: colors_1.default.white,
                    },
                },
                // dark mode
                'dark-tremor': {
                    brand: {
                        faint: '#0B1229',
                        muted: colors_1.default.blue[950],
                        subtle: colors_1.default.blue[800],
                        DEFAULT: colors_1.default.blue[500],
                        emphasis: colors_1.default.blue[400],
                        inverted: colors_1.default.blue[950],
                    },
                    background: {
                        muted: '#131A2B',
                        subtle: colors_1.default.gray[800],
                        DEFAULT: colors_1.default.gray[900],
                        emphasis: colors_1.default.gray[300],
                    },
                    border: {
                        DEFAULT: colors_1.default.gray[800],
                    },
                    ring: {
                        DEFAULT: colors_1.default.gray[800],
                    },
                    content: {
                        subtle: colors_1.default.gray[600],
                        DEFAULT: colors_1.default.gray[500],
                        emphasis: colors_1.default.gray[200],
                        strong: colors_1.default.gray[50],
                        inverted: colors_1.default.gray[950],
                    },
                },
            },
            boxShadow: {
                // light
                'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                'tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                'tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                // dark
                'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                'dark-tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                'dark-tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            },
            borderRadius: {
                'tremor-small': '0.375rem',
                'tremor-default': '0.5rem',
                'tremor-full': '9999px',
            },
            fontSize: {
                'tremor-label': ['0.75rem', { lineHeight: '1rem' }],
                'tremor-default': ['0.875rem', { lineHeight: '1.25rem' }],
                'tremor-title': ['1.125rem', { lineHeight: '1.75rem' }],
                'tremor-metric': ['1.875rem', { lineHeight: '2.25rem' }],
            },
        },
    },
    safelist: [
        {
            pattern: /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
            variants: ['hover', 'ui-selected'],
        },
        {
            pattern: /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
            variants: ['hover', 'ui-selected'],
        },
        {
            pattern: /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
            variants: ['hover', 'ui-selected'],
        },
        {
            pattern: /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        },
        {
            pattern: /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        },
        {
            pattern: /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        },
    ],
    plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/forms')],
};
exports.default = config;
