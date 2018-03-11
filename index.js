'use strict';

var path = require('path'),
	MergeTrees = require('broccoli-merge-trees'),
	Funnel = require('broccoli-funnel'),
	UnwatchedDir = require('broccoli-source').UnwatchedDir;

module.exports = {
	name: 'ember-resize-sensor',

	isDevelopingAddon: function () {
		return true;
	},

	included: function (app) {
		this._super.included(app);

		app.import('vendor/ResizeSensor.js');
		app.import('vendor/shims/resize-sensor.js');
	},

	treeForVendor: function (tree) {
		var dir = new UnwatchedDir(path.dirname(require.resolve('css-element-queries/src/ResizeSensor.js'))),
			resizeSensorTree = new Funnel(dir, {
				files: ['ResizeSensor.js'],
			});

		return new MergeTrees([tree, resizeSensorTree]);
	}
};
