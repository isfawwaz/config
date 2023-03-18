module.exports = {
  rules: {
    // Last import should have a newline after
    'import/newline-after-import': ['error', { count: 1 }],
    // Order imports
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      },
    ],
  },
};
