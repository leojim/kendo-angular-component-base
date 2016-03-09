[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

A starter repository for Kendo UI Angular components, which provides the basic directory structure and dependencies.

**WARNING:** the current test setup is extremely brittle and (mostly) based on the [AngularClass starter](https://github.com/AngularClass/angular2-webpack-starter) repository.
There are several very ugly things, we hope that these will be gradually cleared as the framework matures.

**WARNING:** After cloning the repo and running `npm install`, run `npm run typings`.

## Structure

- The `src` directory contains the component source code. All files should be have the `.ts` extensions so that the build scripts may pick them.
- The `src/bundle.ts` file should import and re-export all public components of the package. It is used for the `build-cdn` task.
- The `src/index.ts` is the main entry point for the NPM package (as specified by the `package.json`). The `build-npm-package` transpiles it to `dist/npm/js/index.js`;
- The `src/kendo-component.ts` file is the actual sample component implementation.
- The `src/util.ts` is an optional example of an additional file - you may remove it if unnecessary.

- The `examples` directory hosts the demos for the component. As a bare minimum, the component should have a `basic usage` and a `CDN` example.  The `CDN` example should work as expected after the `build-cdn` task has been run.
- The `test` directory contains the component tests. They are transpiled just like the source code itself, and are run with Jasmine in Karma.

- The `docs` directory contains markdown files that document the specifics of the component.

## Usage

- Fork the repository to an appropriately named new one;
- Change the package name/description in `package.json`; change the reference to the theme package;
- Change the library name in `gulpfile.js`;
- Change the `src/kendo-component.ts` file name to something more meaningful;
- Delete the current contents and put something nice in `README.md`.

## Gulp tasks

- `build-npm-package` - builds the scripts and styles in `dist/npm` in CommonJS format;
- `build-cdn` - builds the scripts and styles in `dist/cdn` in UMD format.
- `start` - starts the webpack-dev-server (with browsersync in front of it) - suitable for example preview, development and testing.
- `test` - runs the tests with Jasmine in NodeJS.
- `watch-test` - runs the tests in watch mode.
