module.exports = function publishFailed(message){
	var req = this.req;
	var res = this.res;
	var sails = req._sails;

	sails.log.error('Report publish failed: ' + message);
	sails.log.info('Sending 500 INTERNAL SERVER ERROR response');
	res.status(500);
	res.send("An internal error occurred.");
}