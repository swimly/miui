import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { inlineSvg } from 'stencil-inline-svg';

export const config: Config = {
  namespace: 'miui',
  taskQueue: 'async',
  globalStyle: 'src/global/variables.css',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/global/variables.scss',
        'src/global/mixins.scss',
        'src/global/reset.scss'
      ]
    }),
    nodePolyfills(),
    inlineSvg()
  ],
  outputTargets: [
    {
      type: 'dist',
      empty: true,
      esmLoaderPath: '../loader'
    },
    // {
    //   type: 'docs-readme',
    //   footer: '*Build with swimly!*'
    // },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
