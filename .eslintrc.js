module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: [
    'prettier',
    'simple-import-sort',
  ],
  rules: {
    'prettier/prettier': 0,
    'no-console': 'off',
    'eol-last': 'off',
    "simple-import-sort/imports": "off",
    "simple-import-sort/exports": "off",
  },
}
