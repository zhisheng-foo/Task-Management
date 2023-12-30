'use strict';

const {NoExistingTaskException ,NoExistingAuthorError } = require('../error/custom-error');

module.exports = function(Task) {

  Task.createTask = function(data, callback) {
    // Check if the authorId exists
    var AuthorModel = Task.app.models.Author; // Assuming 'Author' is the name of your author model
    AuthorModel.exists(data.authorId, function(err, exists) {
        if (err) {
            callback(err);
        } else if (!exists) {
            callback(new NoExistingAuthorError('Author not found'));
        } else {
            // Proceed with creating the task
            Task.create(data, function(err, task) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, task);
                }
            });
        }
    });
  };


  Task.remoteMethod('createTask', {
      accepts: [
        { arg: 'data', type: 'object', http: { source: 'body' } }
      ],
      returns: { arg: 'task', type: 'object', root: true },
      http: { verb: 'post', path: '/createTask' } 
  });

  Task.retrieveTaskById = function(taskId, callback) {
      Task.findById(taskId, function(err, task) {
        if (err) {
          callback(err);
        } else {
          if (!task) {
            const error = new NoExistingTaskException('Task not found!');
            callback(error);
          } else {
            callback(null, task);
          }
        }
      });
    };

  Task.remoteMethod('retrieveTaskById', {
      accepts: [
        { arg: 'taskId', type: 'string', required: true }
      ],
      returns: { arg: 'task', type: 'object', root: true },
      http: { verb: 'get', path: '/retrieveTaskById/:taskId' }
  });

  Task.retrieveTaskByTitle = function(title, callback) {
      Task.findOne({ where: { title: title } }, function(err, task) {
        if (err) {
          callback(err);
        } else {
          if (!task) {
            const error = new NoExistingTaskException('Task not found!');
            callback(error);
          } else {
            callback(null, task);
          }
        }
      });
  };

  Task.remoteMethod('retrieveTaskByTitle', {
      accepts: [
        { arg: 'title', type: 'string', required: true }
      ],
      returns: { arg: 'task', type: 'object', root: true },
      http: { verb: 'get', path: '/retrieveTaskByTitle/:title' }
  });

   
  Task.updateTask = function(taskId, newData, callback) {
      Task.findById(taskId, function(err, task) {
        if (err) {
            callback(err);
        } else if (!task) {
            callback(new Error('Task not found'));
        } else {
            if ('authorId' in newData) {
              var AuthorModel = Task.app.models.Author;
              AuthorModel.exists(newData.authorId, function(err, exists) {
              if (err) {
                callback(err);
              } else if (!exists) {
                callback(new NoExistingAuthorError('Author not found'));
              } else {
                performUpdate(task, newData, callback);
              }
            });
          } else {
              performUpdate(task, newData, callback);
          }
        }
    });
  };
  
  function performUpdate(task, newData, callback) {
      if (newData.status) {
          const allowedStatusValues = ['todo', 'in-progress', 'completed'];
          if (!allowedStatusValues.includes(newData.status)) {
              const error = new Error('Invalid status value');
              error.statusCode = 400; 
              callback(error);
              return;
          }
      }
  
    task.updateAttributes(newData, function(err, updatedTask) {
        if (err) {
            callback(err);
        } else {
            callback(null, updatedTask);
        }
    });
  }
  

  Task.remoteMethod('updateTask', {
      accepts: [
        { arg: 'taskId', type: 'string', required: true },
        { arg: 'newData', type: 'object', http: { source: 'body' } }
      ],
      returns: { arg: 'updatedTask', type: 'object', root: true },
      http: { verb: 'put', path: '/updateTask/:taskId' }

  });

  Task.deleteTask = function(taskId, callback) {
      Task.destroyById(taskId, function(err) {
        if (err) {
          callback(err);
        } else {
          // Task deleted successfully
          callback(null, { message: 'Task deleted successfully' });
        }
      });
  };

  Task.remoteMethod('deleteTask', {
      accepts: [
        { arg: 'taskId', type: 'string', required: true }
      ],
      returns: { arg: 'message', type: 'object', root: true },
      http: { verb: 'delete', path: '/deleteTask/:taskId' }
    });

};
