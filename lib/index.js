'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');

var BabelGenerator = module.exports = function BabelGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.argument('name', {
      required: true,
      type: String,
      desc: 'The subgenerator name'
    });
    
    this.log('You called the Babel subgenerator with the argument ' + this.name + '.');
};

util.inherits(BabelGenerator, yeoman.generators.Base);

BabelGenerator.prototype.writing = function writing() {
    this.template('./lib/lib.js', './src/lib/lib.js');
};
