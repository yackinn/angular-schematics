# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Development
Use the sample project to work with the schematics locally inside an Angular project.

```bash
yarn build
cd dist && yarn link
cd ../sample-project && yarn link @ynnck/angular-schematics
cd ..
yarn build:dev
```

If you change any template files inside the files folder run ```yarn build``` again.<br>
To use the schematics inside the sample project use the Angular language service.

```bash
ng g @ynnck/angular-schematics:container --name good-container
```


### Publishing

Make sure you commit and push your changes to git before publishing the package.<br>
Semver is used to publish the package.
To publish, simply do:

```bash
npm run release
```
Use npm to publish the library. Yarn won't work correctly due to login failure.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with
```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.
