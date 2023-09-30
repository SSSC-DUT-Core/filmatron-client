/* eslint-disable */

const prettierOptions = require("./.prettierrc.js");
module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },

    env: {
        browser: true,
        node: true,
        es6: true,
    },

    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            node: {
                extensions: [".ts", ".tsx"],
            },
        },
    },

    plugins: ["@typescript-eslint"],
    extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
        "airbnb",
        "prettier",
        "plugin:prettier/recommended",
        "plugin:security/recommended",
    ],

    rules: {
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [
            1,
            {
                extensions: [".ts", ".tsx", ".js", ".jsx"],
            },
        ],
        "react/jsx-props-no-spreading": "off",
        "import/extensions": [
            "warn",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        // "jsx-a11y/anchor-is-valid": [
        //     "warn",
        //     {
        //         components: ["Link"],
        //         specialLink: ["hrefLeft", "hrefRight"],
        //         aspects: ["invalidHref", "preferButton"],
        //     },
        // ],
        "no-nested-ternary": "off",
        "import/prefer-default-export": "off",
        "no-underscore-dangle": "warn",
        "no-unused-vars": "warn",
        "no-shadow": "warn",
        "prefer-template": "warn",
        "no-undef": "warn",
        "no-console": "warn",
        "react-hooks/exhaustive-deps": "warn",
        "react/self-closing-comp": "warn",
        "react/no-unknown-property": "warn",
        "react/button-has-type": "warn",
        "react/no-array-index-key": "warn",
        "lines-around-directive": "warn",
        "import/order": "warn",
        "react/prop-types": "warn",
        "react/require-default-props": "warn",
        "import/newline-after-import": "off",
        "no-restricted-syntax": "off",
        "jsx-a11y": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "guard-for-in": "off",
        radix: "off",
        "jsx-a11y/heading-has-content": "off",
        // "prettier/prettier": ["error", prettierOptions],
    },
};
