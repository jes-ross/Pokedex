import globals, { browser, es2024 } from "globals";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  {
    env: {
      browser:true,
      node:true,
      es2024:true
    },
    extends:[
      'eslint:recommended',
      'plugin:prettier/recommended'
    ],

    parserOptions:{
      ecmaVersion:'latest',
      sourceType:'module',
    },

    rules:{
      'indent':['error', 'tab'],
      'semi':['error', 'never'],
      'quotes':['error', 'double']
    },

    plugins:[
      'prettier'
    ]
  }
  
];