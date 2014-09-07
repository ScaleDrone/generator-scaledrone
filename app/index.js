'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var _ = require('lodash');

var ScaledroneGeneratorGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the Scaledrone generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'id',
      message: "Enter your channel's id",
      required: true
    }, {
      type: 'input',
      name: 'secret',
      message: "Enter your channel's secret",
      required: true
    }, {
      type: 'confirm',
      name: 'auth',
      message: 'Would you like to enable authenthication (creates a Node.js server for JSON Web Tokens)',
      default: true,
      required: true
    }];

    this.prompt(prompts, function (options) {
      this.options = options;
      done();
    }.bind(this));
  },

  writing: {
    projectfiles: function () {
      this.mkdir('client');
      this.template('package.json', 'package.json', this.options);
      this.template('index.html', 'client/index.html', this.options);
      if (this.options.auth) {
        this.mkdir('jwt-server');
        this.template('server.js', 'jwt-server/server.js', this.options);
      }
    }
  },

  end: function () {
    var done = _.after(3, function () {
      this.async();
      if (this.options.auth) {
        this.log(yosay(
          "All done! Start the client with 'http-server client' and the authenthication server with 'node jwt-server/server.js'"
        ));
      } else {
        this.log(yosay("All done! Start the client with 'http-server client'"));
      }
    }.bind(this));
    this.npmInstall(['express'], { 'save': true }, done);
    this.npmInstall(['jwt-simple'], { 'save': true }, done);
    this.npmInstall(['http-server'], { 'saveDev': true }, done);
  }
});

module.exports = ScaledroneGeneratorGenerator;
