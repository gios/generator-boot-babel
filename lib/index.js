'use strict';

var util = require('util');
var chalk = require('chalk');
var yeoman = require('yeoman-generator');

var BabelGenerator = module.exports = function BabelGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.argument('name', {
        required: true,
        type: String,
        desc: 'The library name'
    });

    this.log('You created the library name with the name ' + chalk.underline.green(this.name) + '.');
};

util.inherits(BabelGenerator, yeoman.generators.Base);

BabelGenerator.prototype.writing = function writing() {
    this.template('lib.js', './src/lib/' + this.name + '.js');
};