var express = require('express'),
    router = express.router(),
    logger = require('../../config/logger');

    module.exports = function (app, config) {
        app.use('/api', router);

        router.route('/users').get(function(req, res, next){
            logger.log('Get all users', 'verbose');
                var query = User.find()
                  .sort(req.query.order)
                  .exec()
                  .then(result => {
                       if(result && result.length) {
                      res.status(200).json(result);
                  } else {
                      res.status(404).json({message: 'No users'});
                  }
                  })
                  .catch(err => {
                    return next(err);
                  });
              });

        
    };