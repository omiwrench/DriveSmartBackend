'use strict'

module.exports = function InvalidReportError(req){
	Error.captureStackTrace(this, this.constructor);
	this.name = this.constructor.name;
	this.req = req;
}

require('util').inherits(module.exports, Error);