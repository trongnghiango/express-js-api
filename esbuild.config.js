/* eslint-disable import/no-extraneous-dependencies */
const esbuild = require('esbuild')

const babel = require('@babel/core')
const fs = require('fs').promises

const options = {
  entryPoints: ['./src/index.js'],
  target: ['node20.17.0'],
  outfile: 'dist/server.js',
  sourcemap: true,
  // splitting: true, //only works with the "esm" format
  minify: true,
  bundle: true,
  // watch: true,
  platform: 'node',
  // format: 'js',
  define: { 'process.env.NODE_ENV': '"production"' },
  external: ['./node_modules/*', './keys/*', './logs/*'],
  plugins: [
    {
      name: 'babel-plugin',
      setup(build) {
        build.onLoad({ filter: /\.js$/ }, async (args) => {
          const source = await fs.readFile(args.path, 'utf8')
          const result = await babel.transformAsync(source, {
            filename: args.path,
            presets: ['@babel/preset-env'],
            plugins: [
              [
                'module-resolver',
                {
                  alias: {
                    '@': './src',
                  },
                },
              ],
            ],
          })
          return {
            contents: result.code,
            loader: 'js',
          }
        })
      },
    },
  ],
}

// run build with esbuild
// build(options).catch(() => process.exit(1));
;(async () => {
  const res = await esbuild.build(options)
  if (!res) {
    process.exit(1)
  }
})()
