module.exports = function(app) {

    var user = require('./../controllers/user-controllers.js');
  
    app.get('/new-user', user.new);
  
    app.post('/user/create', user.create);
  
    app.get('/user/list', user.list);
    
    app.get('/user/:userID', user.single);
}