/// <reference path="bundle.d.ts" />
/// <reference path="typings/index.d.ts" />

import kue = require('kue');
import assert = require('assert');

assert.equal(typeof kue.createQueue, 'function');
