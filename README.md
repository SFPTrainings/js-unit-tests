## Small Footprint Unit Testing Training

### Quick Start

* clone the repository `git clone https://github.com/SFPTrainings/js-unit-tests.git`

* run `npm install` to download the node dependencies

* start the app by running `npm start`

* run the unit test suite by running `npm run karma`

### Follow the trainer instructions


#### Libraries in use
 * `karma` - test runner
  * loads up code files and unit tests
  * can watch for file changes (let it running and it will let you know when a test fails)
  * can run tests in a multitude of browsers (Chrome, Firefox, Internet Explorer, PhantomJS)
 * `mocha` - test framework
  * greatly simplifies unit testing
  * allows us to group tests per unit
 * `chai` - assertion library
  * allows us to assert unit test output in a more advanced manner than only with mocha
 * `sinon` - mocking/stubbing/spying library
 * `karma-coverage` - coverage library, which uses `istanbul`
