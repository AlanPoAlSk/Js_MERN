// const PersonController = require('../controllers/person.controller');
// module.exports = function(app){
//     app.get('/api', PersonController.index);
// }

const PersonController = require('../controllers/person.controller');
module.exports = function(app){
    app.get('/api', PersonController.index);
    app.get('/api/people', PersonController.getAllPeople);
    app.get('/api/people/:id', PersonController.getPerson);
    app.post('/api/people', PersonController.createPerson);
}
