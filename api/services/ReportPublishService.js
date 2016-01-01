var ReportPublishFailedError = require('../errors/ReportPublishFailedError');

module.exports = {
	publish: function(report, callback){
		Reports.create(report).exec(function(err, created){
			if(err){
				var error = new ReportPublishFailedError(err.message);
				return callback(error);
			}
			else{
				return callback(null);
			}
		});
	}
}