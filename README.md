## Setup for Beginning AngularJS Workshop - LibertyJS 2015

You've been wondering how AngularJS works, and you need a place to play. This project will help you do enough damage on your keyboard to learn the fundamentals of AngularJS and its ecosystem of tools.

## Requirements

### Install (NodeJS)[nodejs.org]

You should use the most recent stable version (0.10.xx or 0.12.xx, doesn't matter which).

Make sure NodeJS is in your path. You can test by executing 

```bash
node -v
npm -v
```

From a command line shell. If they are not there, add the NodeJS target directory to your path (on windows it _might_ be C:\Program Files\Node).

### Install the globally required tools

This project requires a simple web server, linting tools, a testing framework, and some others.  Please issue this from the command line:

```bash
npm install -g jshint karma-cli bower gulp http-server
```

### Download and install this project

Grab an archive [from here](https://github.com/krimple/getting-started-angularjs-libertyjs/releases/tag/1.0.0) and unzip it in a directory.

Issue the following command from the root of the project directory to finish setting it up:

```bash
npm install
```

### Test our final product

Two tests will help verify that you've set everything up right.  First, ask the Karma test runner to execute your tests:

```bash
karma start
```

Karma will run a test in the test\spec directory and report a success. You may exit the test runner using [CTRL-C].

Finally, test the http-server and run the hello-world angular page:

```bash
http-server www
```

Then run a web browser against `http://localhost:8080` and pick the hello-world angular html page, it should show a heading that states "Hello Angular".

