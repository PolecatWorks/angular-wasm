# Overview

This is two builds in one project.
The first build is a rust based wasm build that create a wasm game of life.
The second build creates an angular app that installs the wasm module into the build.

When you view the intended web app you can watch your game of life evolve.

Internally it uses memory mapping between wasm memory and angular to trigger updates to angular and achieve the relevant screen redraws.

## Running in Dev mode

Create a terminal in the mywasmproject dir and then run

    make watch

Create a terminal in the my-app dir and then run

    ng serve

Open a browser to http://localhost:4200

