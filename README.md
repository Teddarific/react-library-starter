# React Library Starter

##### A React Library starter pack w/ easy gh-pages

![alt text](https://img.shields.io/github/license/teddarific/react-lib-starter.svg "MIT License")

## Getting Started

To get started, simply clone this repo:

```
git clone https://github.com/Teddarific/react-lib-starter.git
```

Rename the new repo to the name of your library, and go through the ````package.json```` to fill out your own details as well. 

Install all the dependencies by running
```yarn```

To run the library, ```yarn start```

To build the library, ```yarn build```

To build the docs, ```yarn build:docs```

To publish your library, ```yarn publish``` or ```npm publish```

## Directory Structure

Here's a peek of what the file structure looks like:

```
.
├── LICENSE
├── README.md
├── docs
│   ├── docs.07b51108.js
│   ├── docs.07b51108.map
│   ├── docs.ad0e1ac5.css
│   └── index.html
├── package.json
├── src
│   ├── ExampleComponent
│   │   ├── index.js
│   │   └── index.scss
│   ├── docs
│   │   ├── index.html
│   │   └── index.js
│   └── index.js
├── webpack.config.js
└── yarn.lock
```

Inside ```src``` is where your library will go, and where you can create your own custom React components!

Inside ```docs``` is where you can test your library, and ideal for a demo website that you can show off your cool components. It is what gets hosted when ```yarn start``` runs.

## Configuring Github Pages
The ```doc``` is all set up to run on gh-pages! Simply go into your repo's settings, and set gh-pages to run based off the source of ```master branch /docs folder```. Assuming you've built ```yarn build:docs``` and committed it to master, the docs will be published to your gh-pages!

## Disclaimer

This is by no means the perfect starter pack. This is not set up for testing, nor set up for more complex Redux-based components. This is my personal vision for a simple starter pack to get a simple React component shared with the world!
