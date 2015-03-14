'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var BabelGenerator = module.exports = function BabelGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.argument('appName', {
        type: String,
        required: false
    });

    this.appName = this.appName || path.basename(process.cwd());
    this.appName = this._.camelize(this._.slugify(this._.humanize(this.appName)));
    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));

    this.on('end', function () {
        this.installDependencies({
            skipInstall: options['skip-install']
        });
    });
};

util.inherits(BabelGenerator, yeoman.generators.Base);

BabelGenerator.prototype.welcome = function () {
    this.log(yosay(
        'Welcome to the ' + chalk.red('Babel') + ' generator!'
    ));
};

BabelGenerator.prototype.app = function app() {
    this.template('gulpfile.js', 'gulpfile.js');
    this.template('_package.json', 'package.json');
    this.template('_webpack.config.js', 'webpack.config.js');
};

BabelGenerator.prototype.projectFolders = function projectFolders() {
    this.directory('.\\src', 'src', true);
};

BabelGenerator.prototype.projectFiles = function projectFiles() {
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitattributes', '.gitattributes');
    this.copy('gitignore', '.gitignore');
    this.copy('jshintrc', '.jshintrc');
    this.copy('travis.yml', 'travis.yml');
};