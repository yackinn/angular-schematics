# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with
```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
yarn build
yarn publish
```


Use test project to test schematics locally inside a real project

```bash
cd dist && yarn link
cd ../sample-project && yarn link @yackinn/angular-schematics

yarn build:dev
```

If you change any template files inside the files folder run ```yarn build``` again.

To use the schematics inside the sample project use the Angular language service.

```bash
ng g @yackinn:angular-schematics container --name good-container
```
