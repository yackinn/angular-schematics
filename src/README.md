# Angular Schematics

This repository is a basic Schematic implementation that provides Angular schematics.

## Schematics

The following schematics are included.
Each schematic inherits most of the Angular default schematic options.

### Container
A container component that can be used as a parent to presenter components following the container presenter schema.
```bash
ng g @ynnck/angular-schematics container --name %component name%
```

    
### Presenter
A presenter component that can be used as view component without containing business logic following the container presenter schema.
```bash
ng g @ynnck/angular-schematics presenter --name %component name%

// use --template to create a template file
```
