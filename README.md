[![generator-phaser-plus][logo]][gpp_]

[![npm version][bdg1]][gpp_]
[![dependencies][bdg2]][ddm1]
[![devDependencies][bdg3]][ddm2]
[![Travis CI Build Status][bdg4]][tci_]

>   Create [Phaser][phsr] Web games using Browserify, BrowserSync, Gulp and more.


Two templates, same workflow!
-----------------------------

**New in version "1.0"**: Choose how you want to craft your game code:

*   With application scripts written as CommonJS modules, ideal for newcomers as well seasoned developers who want to start creating games at once.

*   Or using ECMAScript modules and the latest available spec features. Comes with [Babel][babl] compiler to make scripts of the future compatible with today's browsers and devices. Recommended for skilled developers and adventurers.

>   Note: All projects are configured to use the Phaser CE libraries.


Batteries included
------------------

Projects created with `generator-phaser-plus` are powered by the following tools:

*   [Gulp][gulp] task manager, to handle development and distribution tasks, with [alternative npm scripts][t].

*   [BrowserSync][bsnc] for cross-device testing.

*   [Browserify][brsy] for easier management of components and dependencies.

*   [ESLint][eslt] for code quality check.


Quick Start
-----------

>   Note: Assuming you have already installed [Node.js][node].

1.  **Get [Yeoman][yo__] and `generator-phaser-plus` via [npm][npm_].**

    ```sh
    npm install --global yo                    # Install Yeoman if you don't have it yet.
    npm install --global generator-phaser-plus # Install generator-phaser-plus.
    ```

2.  **Create a directory to keep your project contents and go into it.**

    ```sh
    mkdir my-awesome-game
    cd my-awesome-game
    ```

3.  **Create your new game project.**

    ```sh
    yo phaser-plus
    ```

4.  **Launch it!**

    ```sh
    npm start
    ```

Have a look at the [documentation][m] to learn more about available features and [the most recent development updates][n], including [sub-generators][s], [how projects are structured][p], [development tasks][t] and a more in-depth [hands-on tutorial][g], presenting the general workflow and how you can take advantage of the generator to speed up your game development.


License
-------

This software is distributed under the terms of the [MIT License](LICENSE).


<!-- Links -->

[n]: docs/news.md
[m]: docs/index.md
[t]: docs/tasks.md
[p]: docs/project-layout.md
[g]: docs/quick-start-guide.md
[s]: docs/generator.md#sub-generators
[logo]: docs/media/logo.png

[phsr]: http://phaser.io/
[yo__]: http://yeoman.io/
[eslt]: http://eslint.org/
[gulp]: http://gulpjs.com/
[babl]: https://babeljs.io/
[node]: https://nodejs.org/
[brsy]: http://browserify.org/
[npm_]: https://www.npmjs.com/
[bsnc]: http://www.browsersync.io/
[ddm1]: https://david-dm.org/rblopes/generator-phaser-plus
[gpp_]: https://www.npmjs.com/package/generator-phaser-plus
[tci_]: https://travis-ci.org/rblopes/generator-phaser-plus
[ddm2]: https://david-dm.org/rblopes/generator-phaser-plus?type=dev
[bdg1]: https://img.shields.io/npm/v/generator-phaser-plus.svg?style=flat-square
[bdg2]: https://img.shields.io/david/rblopes/generator-phaser-plus.svg?style=flat-square
[bdg4]: https://img.shields.io/travis/rblopes/generator-phaser-plus.svg?style=flat-square
[bdg3]: https://img.shields.io/david/dev/rblopes/generator-phaser-plus.svg?style=flat-square
