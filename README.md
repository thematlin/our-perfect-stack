# Spasiba's perfect stack
This single page application stack aims to be a boilerplate for cross platform development and hosting. The distribution package is configured to be as minimal as possible and few HTTP requests.

## Our building blocks
* Durandal.js
* jQuery
* Knockout.js
* require.js
* requirejs-text
* gulp
* bootstrap
* node.js
* bower.io

### Prerequisites
Download and install:
* Node.js / npm
* gulp
* bower

### Installation
Git clone https://github.com/thematlin/our-perfect-stack.git

### Directory Layout
    src/
        assets/             => Contains main.js that starts application and index page
              modules/      =>     Shell module for routing and wrap child modules
              stylesheets/  =>     Application's styles (LESS)


## Strengths
* Easy to set up and start developing (and cross platform!)
* You can use whatever backend API you want (as long as you can access it over HTTP)
* Nice and fast ui (if developed correctly) for the end user
* Powerful build script with a lot of possibilities

## Weaknesses
* Might not be suitable for very static pages that only reads/presents data
* No test harness set up at time of writing
* Extra work to get perfect SEO

## Possible improvements and extensions
* Create test harness
* Add LESS compilation
* Create fictional AJAX request to some HTTP API