# angular_bootstrap

* Good start for all your angular project 
* Technologies used: Yeoman, Grunt, bower, angularjs, bootstrap for css.


Objective
-------

Build a generic start for every angular project 


Done
-------

* Create a git repository
* Create the app with yeoman 
* Use ui-rooter
* Split the app into modules
* Use Bootstrap-UI
* Load properly bootsrap SASS (in order to easily overwrite bootstrap variables)
* Create different environment build(dev, stagging, prod)
* Use wiredep to dynamically load bower dependencies (app & test)
* Use angular ngtemplates for caching your HTML templates with $templateCache.
* Create a REST API Call Factory
* Create a HTTP interceptor
* Handle server message error

TODO
-------
* Use SvgIcons
* Use John Papa Styles

* Many other improvements to come

## Requirements

- NPM (Comes with [Node.js](http://nodejs.org/))
- Ruby (comes pre-installed on Mac) - [installation guide](https://www.ruby-lang.org/en/installation/)
- SASS - [installation](http://sass-lang.com/install)
- Compass - [installation](http://compass-style.org/install/)

## How to run it
1. Close the repository
2. Make sure you have Grunt and Bower installed `sudo npm install -g grunt grunt-cli bower`
3. Install dependencies `npm install && bower install` inside the project repository
4. Run server `grunt serve`
5. Check out the project at `http://localhost:9000/apps/index.html`

## Build
- Running `grunt build` will build the project into the dist directory.
- Running `grunt staging` will build the staging project into the dist directory.
- Running `grunt production` will build the production project into the dist directory.



## Testing

Running `grunt test` will run the unit tests with karma.
