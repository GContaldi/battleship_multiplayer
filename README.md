[![Build Status](https://travis-ci.org/GContaldi/battleship_multiplayer.svg)](https://travis-ci.org/GContaldi/battleship_multiplayer)

# Battleship Multiplayer

## Basic Idea

The idea behind the implementation of this game is to practice some technologies. The game is the well known [battleship game](https://en.wikipedia.org/wiki/Battleship_(game)).

## What's next?

- Implement the basic rules and some basic UI
- Implement multiplayer logic using [SocketIO](http://socket.io/)
- Implement some artificial intelligence to enable games versus the machine

## Used technologies

This single page application is written using:

- ES6 compiled into ES5 using [Babel](http://babeljs.io/).
- Bundled with [Webpack](http://webpack.github.io/).
- Tests runs with [Karma](http://karma-runner.github.io/) and [Jasmine](http://jasmine.github.io/).

## Building and Running

- Make sure you have node and npm installed.

- Clone the Github repo:

    ```
        git clone https://github.com/GContaldi/battleship_multiplayer.git
    ```

- Install npm dependencies:

    ```
        cd battleship_multiplayer
        npm install
    ```

- Run the tests:

    ```
        gulp test             // to run tests and watch
        gulp test-single-run  // to run tests only once
    ```

build step not needed to run the tests, since is already included in the test task.

- Start the app and watch changes:

    ```
        gulp dev-server
    ```

build step not needed to start the app, since is already included in the start task.
