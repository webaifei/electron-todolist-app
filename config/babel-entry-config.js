module.exports = {
  extensions: ['.js', '.ts', '.tsx'],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { electron: "10.1.5" },
        useBuiltIns: 'usage',
        modules: 'commonjs',
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
  ],
};
