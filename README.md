# [Da-dash](https://github.com/sen-team8/da-dash.git)

Da-dash provides a dashboard for the students and faculty of DA-IICT, where one can have widgets for almost every site being visited daily within the DA-IICT domain.It provides a web-application that brings different DA-IICT websites and services on one platform so that one doesn’t have to constantly check different sites. This will not only reduce the load of opening different tabs for every purpose but will also help in enhancing interactions among students, among batchmates and also between students and faculties.It has 5 widgets - intranet, webmail, todo , chat room and class notes & examinations.

[![Build Status](https://travis-ci.org/sen-team8/da-dash.svg?branch=master)](https://travis-ci.org/sen-team8/da-dash)

## Basics

* Da-dash is a web application for the students of DA-IICT.
* It's intentionally simple and consists of widgets. It lets you visit the most common websites like intranet, webmail in a customized manner.Also it will have widgets for todo list and chat rooms.
* It supports modern browsers.

## Technical Aspects

* React is used for making the web app of Da-dash. It is a JavaScript library for creating user interfaces. React is used to solve one problem: building large applications with data that changes over time.
* travis-ci:Travis CI is a FOSS, hosted, distribute continuous integration service used to build and test software projects hosted at GitHub.Continuous integration is a development philosophy where we continuously keep merging our code instead of only when reaching a milestone. Hence we integrate the features as and when we produce them. The builds are automated on the Travis server and it ensures that the build is proper and issue free with the rest of the stable code.Unit tests and build processes are used when doing the automated testing before integration of the newly added code.

## Participate!

* Read the project [Code of Conduct](CODE_OF_CONDUCT.md) and remember to be nice to one another.
* Read up on [Contributing and the code style of Da-dash](CONTRIBUTING.md).
* See [open issues in the issue tracker](https://github.com/sen-team8/da-dash/issues/new) if you're looking for something to do.

## Prerequisites

* [Node.js](http://nodejs.org/) version 4.0.0 or newer
* Command line development tools (`make`, `git`, and a compiler) for your platform
  * Ubuntu: `sudo apt-get install build-essential git`
  * Mac OS X: Install Xcode and run `xcode-select --install` from a command line

## Installation

To run the current development version of Da-dash on your own computer:

1. Create a local `git clone` of the project, then `cd` into the project folder
2. Run `npm install`
3. Run `npm start`
4. Open `http://localhost:8080/` in a web browser

For guidance on building a packaged version, running tests, and contributing to
development, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Deploy

Run `npm run build`

## Directory

```
.
├── /build/                      # The folder for compiled output
├── /app/                        # Folder containing components
│   ├── /Widgets/                # Code for widgets in Da-dash
│   ├── /components/             # React components
│   ├── /redux/                 
│   ├── /App.js                  # main code for the application
│   ├── /main.css              
│   ├── /index.js               
│   ├── /routes.js               # Universal (isomorphic) application routes
│   └── /server.js               # Server-side startup script
└── /package.json                # The list of 3rd party libraries and utilities
```

## License

Da-dash is available under the [ISC License](https://opensource.org/licenses/ISC).

## Thank you
