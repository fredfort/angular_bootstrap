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
* Use SvgIcons
* Unit test
* End to end test

TODO
-------

* Use John Papa Styles
* Migration to GULP
* Automate the e2e testing
* Improve Unit testing
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
- Running `grunt build` builds the project into the dist directory.
- Running `grunt staging` builds the staging project into the dist directory.
- Running `grunt production` builds the production project into the dist directory.


## Unit Testing

Running `grunt test` runs the unit tests with karma.

## End to end Testing

Install protractor
`npm install -g protractor`

Download the selenium standalone server
`webdriver-manager update`

`webdriver-manager start` 
`grunt protractor` open a browser and run the end to end tests with protractor(selenium).
