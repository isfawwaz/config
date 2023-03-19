// Prettier - https://github.com/prettier/eslint-config-prettier/issues

module.exports = {
  rules: {
    // Enforce consistent brace style for all control statements
    curly: ['error', 'all'],
    // Enforce preserves blank lines before comment
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: false,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: false,
        allowObjectStart: true,
        allowObjectEnd: false,
        allowArrayStart: true,
        allowArrayEnd: false,
      },
    ],
    // Enforce a maximum line length
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
      },
    ],
    // Adding parentheses is considered a valid way to avoid the arrow confusion
    'no-confusing-arrow': ['error', { allowParens: true }],
    // This rule forbids mixing certain operators, such as && and ||.
    'no-mixed-operators': 'error',
    // Disallow all tabs
    'no-tabs': 'error',
    // This rule disallows confusing multiline expressions
    // where a newline looks like it is ending a statement, but is not
    'no-unexpected-multiline': 'error',
    // Enforce the consistent use of either backticks, double, or single quotes
    quotes: ['error', 'single', 'avoid-escape'],
  },
};
