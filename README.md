#Return of Reckoning (RoR) Career Builder

Repository for the RoR Career Builder web app. An online resource for players of the independently run reboot of Warhammer: Age of Reckoning, now known as [Return of Reckoning](https://www.returnofreckoning.com/).

The app is primarily built with [React](https://facebook.github.io/react/) using ES6 syntax (compiled via [Babel](https://babeljs.io)). [Webpack](https://webpack.github.io) is used to build the dev server and production files (instructions below). The JavaScript is linted (dev mode only) using [ESLint](http://eslint.org/) with a slightly modified [Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) config.

The modular CSS has been inspired by [Inverted Triangle CSS](http://itcss.io) (namespacing and low specificity) and takes advantage of Webpack's ability to require assets directly in JavaScript at a React component level. [BEM](https://en.bem.info) methodology has been used throughout and all CSS is written in [Sass](http://sass-lang.com) (".scss" syntax) and compiled in Webpack.

Other assets utilised are:

- [PureCSS](http://purecss.io/) mainly for responsive grid and button styling
- [Font Awesome](http://fontawesome.io/icons/) for icons
- [Roboto Google web font](https://www.google.com/fonts/specimen/Roboto)

You can see the the RoR Career Builder in action at: [http://xxx](http://xxx)

##Instructions

- Clone the repository to a destination of your choice.
- At the destination folder, install the assets using npm:
```
npm install
```
- To run a local dev server, with Hot Module Reloading (HMR), at **http://localhost:3000** run:
```
npm run dev
```
- To create a production ready version of the app (in **/build** directory) run:
```
npm run build
```
