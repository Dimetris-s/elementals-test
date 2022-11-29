import path from 'path';
import { buildWebpackConfig } from './webpack/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './webpack/types/config';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
};

export default (env: BuildEnv) => {
  const mode: BuildMode = env.mode || 'development';
  const isDev = mode === 'development';
  const port = env.port || 3000;

  return buildWebpackConfig({
    isDev, paths, mode, port,
  });
};
