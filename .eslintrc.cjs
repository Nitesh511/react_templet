module.exports = {
   root: true,
   env: {
      browser: true,
      es2021: true
   },
   extends: [
      'prettier',
      'plugin:react/jsx-runtime',
      'plugin:jsx-a11y/recommended',
      'plugin:react-hooks/recommended',
      'eslint:recommended',
      'plugin:react/recommended'
   ],
   settings: {
      react: {
         version: 'detect',
         fragment: 'Fragment'
      },
      'import/resolver': {
         node: {
            moduleDirectory: ['node_modules', 'src/']
         }
      }
   },
   parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module', // Ensure this line is present
      ecmaFeatures: {
         jsx: true
      }
   },
   plugins: ['prettier', 'react', 'react-hooks'],
   rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/react-in-jsx-scope': 'off',
      'no-undef': 'off',
      'react/display-name': 'off',
      'react/jsx-filename-extension': 'off',
      'no-param-reassign': 'off',
      'react/prop-types': 'error',
      'react/require-default-props': 'off',
      'react/no-array-index-key': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/forbid-prop-types': 'off',
      'import/order': 'off',
      'import/no-cycle': 'off',
      'no-console': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'prefer-destructuring': 'off',
      'no-shadow': 'off',
      'import/no-named-as-default': 'off',
      'import/no-extraneous-dependencies': 'off',
      'jsx-a11y/no-autofocus': 'off',
      'no-restricted-imports': [
         'error',
         {
            patterns: ['@mui/*/*/*', '!@mui/material/test-utils/*']
         }
      ],
      'no-unused-vars': [
         'error',
         {
            ignoreRestSiblings: false
         }
      ],
      'no-debugger': 'off',
      'prettier/prettier': [
         'error',
         {
            bracketSpacing: true,
            printWidth: 140,
            singleQuote: true,
            trailingComma: 'none',
            tabWidth: 3,
            useTabs: false,
            endOfLine: 'auto'
         }
      ]
   }
};
