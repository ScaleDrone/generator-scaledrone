'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

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
      message: 'Enter your ScaleDrone channel id',
      required: true
    }, {
      type: 'input',
      name: 'secret',
      message: 'Enter your ScaleDrone channel secret',
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
      this.template('index.html', 'client/index.html', this.options);
      if (this.options.auth) {
        this.mkdir('auth-server');
        this.template('server.js', 'auth-server/server.js', this.options);
      }
    }
  },

  end: function () {
    //this.installDependencies();
  }
});

module.exports = ScaledroneGeneratorGenerator;
