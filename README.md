# Testing - Angular

This is a test project using Angular 14. I've decided on using Angular for this project because it is the framework I'm familiar the most. I like angular because the architecture predetermined by angular makes any team to be able to easily understand any Angular app you throw at them. You can hire an Angular dev and he/she will understand the code base in shorter time compared to other, less opinionated frameworks/libs.

## Get started

### Clone the repo

```shell
https://github.com/dmacasero/Testing.git
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
ng serve
```

Shut it down manually with `Ctrl-C`.

#### npm scripts

These are the most useful commands defined in `package.json`:

- `npm start` - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
- `npm run build` - runs the TypeScript compiler and asset copier once.
- `npm run build:watch` - runs the TypeScript compiler and asset copier in "watch mode"; when changes occur to source files, they will be recompiled or copied into `dist/`.
- `npm run lint` - runs `tslint` on the project files.
- `npm run serve` - runs `lite-server`.
