import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import pkg from './package.json' assert {type: "json"};

export default {
  // external: Object.keys(pkg['dependencies'] || []),
  input: './src/index.ts',
  plugins: [
    typescript({
      tsconfigDefaults: {compilerOptions: {}},
      tsconfig: 'tsconfig.json',
      tsconfigOverride: {compilerOptions: {}},
      useTsconfigDeclarationDir: true,
    }),
    terser(),
    json(),
    commonjs(),
    nodeResolve({
      mainFields: ['module', 'main'],
    })
  ],
  output: [
    {
      format: 'esm',
      file: pkg.module
    }, {
      format: 'cjs',
      file: pkg.main
    }, {
      format: 'umd',
      file: pkg.browser,
      name: pkg.name
        .replace(/^.*\/|\.js$/g, '')
        .replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''))
    }
  ],
  watch: {
    exclude: 'node_modules/**',
    include: 'src/**'
  }
}