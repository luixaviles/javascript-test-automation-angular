JavaScript Test Automation For AngularJS Applications
===========================================================

Slides: [http://luixaviles.github.io/javascript-test-automation-angular](http://luixaviles.github.io/javascript-test-automation-angular)

## Prerequisites

First, ensure you have the following installed:

1. NodeJS - Download and Install [NodeJS](http://http://nodejs.org)
2. Git - Download and Install [Git](http://git-scm.com)

After that, use `Git bash` to run all commands if you are on Windows platform.

## Install dependencies

Install `Grunt`:
```
npm install -g grunt-cli
```

Install `bower`:
```
npm install -g bower
```

Install `protractor`:
```
npm install -g protractor
```

## Run the slides

To run the slides locally, just install dependencies and run the preview server:

```bash
$ cd slides/
$ npm install && bower install
$ grunt server
```

Your default browser should be open with [http://localhost:8000/](http://localhost:8000)


## Run the project

To run the demo project locally, just install dependencies and run the application in development mode:

```bash
$ cd project/
$ npm install && bower install
$ grunt serve
```

Again, default browser should be open with [http://localhost:9000/](http://localhost:9000)

## Runt E2E tests

Once you have installed all dependencies, you only need to run following command to run E2E tests with protractor:

```bash
$ cd project/
$ grunt test:e2e
```

Another way to run E2E tests is use protractor executable only:

```bash
$ cd project/
$ protractor protractor.conf.js
```

Try the code, verify the current behavior. Update the code and configurations and test again!

Please feel free to contact me if you have any question.