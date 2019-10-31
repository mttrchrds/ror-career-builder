#Return of Reckoning (RoR) Career Builder

Repository for the RoR Career Builder web app. An online resource for players of the independently run reboot of Warhammer: Age of Reckoning, now known as [Return of Reckoning](https://www.returnofreckoning.com/).

The app is primarily built with [React](https://facebook.github.io/react/) using ES6 syntax (compiled via [Babel](https://babeljs.io)). [Webpack](https://webpack.github.io) is used to build the dev server and production files (instructions below). Global app state is managed using [Redux](https://redux.js.org/).

For styling, [CSS Modules](https://github.com/css-modules/css-modules) have been used in combination with regular [PostCSS](http://postcss.org) utility classes.

You can see the the RoR Career Builder in action at: [https://builder.returnofreckoning.com](https://builder.returnofreckoning.com)

##Instructions

- Clone the repository to a destination of your choice.
- At the destination folder, install the assets using npm:
```
npm install
```
- To run a local dev server, with Hot Module Reloading (HMR), at **http://localhost:8080** run:
```
npm run dev
```
- To create a production ready version of the app (in **/build** directory) run:
```
npm run prod
```
**Note:** Production scripts are optimised for Heroku.
