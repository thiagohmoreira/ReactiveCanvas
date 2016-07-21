# Reactive Canvas

A demo application of React, Redux and D3.

It is a canvas occupying the entire browser screen that allows you to add
circles to it.

But this is not a party. There are rules:
 - Allow user to create up to 5 circles
 - The sum of circles diameters cannot be larger than the viewport width

And some features:
 - The application remember the set of the circles - they appear again on the
   screen when the app is reopened (using browser local storage).
 - The printed version of the page have inverted colors
   (color of the background become circle color and vice versa)!

See it in action: https://thiagohmoreira.github.io/ReactiveCanvas/

## Requirements (DEV)

- Node.js
- NPM
- Browser ;)

## Running

```sh
npm install   # Installs dependencies

npm test      # Run application tests

gulp build    # Builds the application

gulp watch    # Watch sources and rebuilds
              # the application on the fly
```

## Bugs? Can be done better? Liked it?

Open an issue, a discussion, do a smoke signal... I'm keen hear about it ;)

This is my first dive into React/Redux and D3, so probably there are many things
to improve. And hopefully very few/no bugs to fix ^^
