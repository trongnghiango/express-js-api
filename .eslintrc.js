module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'], // Đường dẫn đến thư mục gốc
        ],
        extensions: ['.js'], // Các phần mở rộng file
      },
    },
  },
  // settings: {
  //   'import/resolver': {
  //     'babel-module': {
  //       alias: {
  //         '@': './src', // Chỉ định alias cho thư mục src
  //       },
  //     },
  //   },
  // },
  rules: {
    'import/no-unresolved': 'error', // Kiểm tra import
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    camelcase: 0,
  },
}
