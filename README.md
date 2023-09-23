# ThreeJS with parcel

## Run demo

```
npm install
npm start
```

Once parcel started, it will give the URL where you can see your web app. Ususually that is:

http://localhost:1234


## ThreeJS intro

ThreeJS is a very popular JavaScript library for generating 3D scenes & objects.

It offers a wide variety of possibilities to build even entire 3D games in the browser.

In order to use third party libraries like threejs in our own code we have to possibilities:

- import the libraries directy in our HTML file from a URL (so called "CDN")
- install the package using "npm install" and later merge the package with our own code, before loading it in the browser

We use the second option here, so we at the end have easier control of the packages and can manage / update them using npm instead of updating them in code.

Also intellisense / code completion in the code editor will be greatly enhanced if we use packages installed with npm.

Therefore we use a setup with a so called BUNDLER (more on that in next section).

We pick one of the most simple ones to use in a small web project: Parcel.

## Parcel Setup

Parcel is a very lightweight bundler.

A bundler allows you to load installed javascript packages used in your code and MERGE them together with your own code into one JS file for deployment. That process is also called "BUNDLING". And hence the name of the tool: Bundler.

At the same time parcel gives you a live server during development.

When you launch it (check npm start script in package.json), it will bundle all resources and start a server which will watch any changes on the code files and reload the page in the browser on any change.

Additionally parcel is able to load and interpret SCSS files referenced in your HTML files and dynamically translate them to CSS (it uses SASS under the hood).

And finally it optimises & minifies the generated CSS files.

So you see: We get a lot of value from that tool!

## How to use this template with your own code & assets

When launching "npm start" the file "src/script.js" is started as first script. And that one will import all the other JS files.

Place all your code files in the folder "src"

Place all your assets, like images (=textures) and 3D Models (recommendation: start with free glb / gltf files from sketchfab.com) in the folder "static". Parcel will detect files that are stored in this static folder during the build process and copies them to the generated build / dist folder.

## Deployment

At the end parcel will generate a "dist" folder with all bundled code.

That is the folder that must get deployed.

A lot of providers like vercel understand parcel and can use it to generate the build folder on deployment. So to whatever provider you like deploy your parcel app, you likely will find a guide online how to configure the deployment. Usually it is quite simple.


## Create parcel three setup in your own project

Setup a package.json:

`npm init -y`

Install three.js library

`npm install three`

Install parcel and the parcel plugin to copy asset files into build output:

`npm install -D parcel parcel-reporter-static-files-copy`

Create config file .parcelrc with this content:

```
{
  "extends": ["@parcel/config-default"],
  "reporters":  ["...", "parcel-reporter-static-files-copy"]
}
```

Create the script for bundling and starting the app using parcel in package.json:

```
"scripts": {
  "start": "parcel ./src/index.html"
}
```

Additionally create a BUILD script in package.json which will be used on deployment (by most providers). 

```
"scripts": {
    "start": "parcel ./src/index.html",
    "build": "parcel build ./src/index.html --public-url ./"
}
```

The build script will additionally optimise your resources (e.g. minify the CSS and JS file sizes)

Bundling is a very common process in any web project.

So get into it right now :)
