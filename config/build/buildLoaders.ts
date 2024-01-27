import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
  //put in correct order make sense
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    typescriptLoader,
  ]
}