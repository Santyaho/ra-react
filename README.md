![ra-react - by Remote Assembly LLC](logo.svg)

# Remote Assembly react native starter kit


## Table of contents

- [Get started](docs/getStarted.md)
- [**Development workflow**](#development-workflow)
- [Technologies](docs/technologies.md)
- [Roadmap](#roadmap)
- [FAQ](docs/faq.md)
- [Credits](#credits)


## Development workflow

**Run the development server**. `npm start -s`
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.

## Roadmap

- [x] Modular and well-documented structure for application code
- [x] [Redux](http://redux.js.org/) and [ImmutableJS](https://facebook.github.io/immutable-js/) for safe state management
- [ ] [Redux Loop](https://github.com/raisemarketplace/redux-loop) for Elm-style controlled side effects
- [ ] Bug reporting
- [ ] [Standard](https://github.com/standard/standard) linter
- [ ] Analytics
- [ ] Generators
- [ ] Standard folders structure
- [ ] Test coverage
- [ ] Standardised scripts
- [ ] User feedback service
- [ ] A-B testing
- [ ] App documentation & designs

## Credits

This project was forked from [React Slingshot](https://github.com/coryhouse/react-slingshot), a React boilerplate by Cory House. It shares some features and design principles, but it wasn't the right fit for our needs.

