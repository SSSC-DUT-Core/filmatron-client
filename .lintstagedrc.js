module.exports = {
    // Type check TypeScript files
    "**/*.(ts|tsx)": () => "yarn tsc --noEmit",

    // Lint & Prettify TS and JS files
    "**/*.(ts|tsx|js)": filenames => [
        `yarn prettier --write .`,
        `yarn eslint --fix ${filenames.join(" ")}`,
        `yarn eslint ${filenames.join(" ")}`,
        // `yarn prettier --write ${filenames.join(" ")}`,
    ],

    // Prettify only Markdown and JSON files
    "**/*.(md|json)": filenames =>
        `yarn prettier --write ${filenames.join(" ")}`,
    // Ignore linting for .prettierrc.js file
    ".prettierrc.js": filenames =>
        `yarn prettier --write ${filenames.join(" ")}`,
};
