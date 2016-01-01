/**
 * ReportControllerController
 *
 * @description :: Server-side logic for managing Reportcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var ReportPublishFailedError = require('../errors/ReportPublishFailedError');

module.exports = {
	publish: function(req, res){
		try{
			var report = extractReportFromRequest(req);
			ReportPublishService.publish(report, function(err){
				if(err){
					if(err instanceof ReportPublishFailedError){
						return res.publishFailed(err.message);
					}
					else{
						return res.serverError();
					}
				}
				else{
					return res.ok();
				}
			});
		}
		catch(err){
			return res.badRequest();
		}
	}	
};

function extractReportFromRequest(req){
	if(req.param('title') &&
	   req.param('description') &&
	   req.param('location')){
		var report = {
			title: req.param('title'),
			description: req.param('description'),
			location: req.param('location')
		}
		return report;
	}
	else{
		throw new ReportPublishError(req);
	}
}