'use strict';

const { ExistingAuthorError , NoExistingAuthorError } = require('../error/custom-error');


module.exports = function(Author) {

    Author.customCreate = function(data, callback) {
        Author.retrieveAuthorByName(data.name, function(findErr, foundAuthor) {
          if (findErr) {
            return callback(findErr);
          } else {
            if (foundAuthor && foundAuthor.id) {
              return callback(new ExistingAuthorError('Author already exists!'));
            } else {
              Author.create(data, function(createErr, authorInstance) {
                if (createErr) {
                  return callback(createErr);
                } else {
                  return callback(null, authorInstance);
              }
            });
          }
        }
      });
    };
    
      
    Author.remoteMethod('customCreate', {
        accepts: {arg: 'data', type: 'object', http: {source: 'body'}},
        returns: {arg: 'author', type: 'object'},
        http: {path: '/customCreate', verb: 'post'}
    });

    Author.retrieveAuthorByName = function(name, callback) {
        Author.findOne({ where: { name: name } }, function(err, authorInstance) {
            if (err) {

              callback(err);

            } else if (!authorInstance) {  

              callback(null, {});       
            } else {  
              callback(null, authorInstance);
            }
        });
    };

    Author.remoteMethod('retrieveAuthorByName', {
        accepts: { arg: 'name', type: 'string', required: true, http: { source: 'query' } },
        returns: { arg: 'author', type: 'object' },
        http: { path: '/retrieveAuthorByName', verb: 'get' }
    });

    Author.retrieveAuthorById = function(id, callback) {
        Author.findById(id, function(err, authorInstance) {
            if (err) {
                callback(err);
            } else if (!authorInstance) {
                callback(null, {});
            } else {
                callback(null, authorInstance);
            }
        });
    };

    Author.remoteMethod('retrieveAuthorById', {
        accepts: { arg: 'id', type: 'number', required: true, http: { source: 'path' } },
        returns: { arg: 'author', type: 'object' },
        http: { path: '/retrieveAuthorById/:id', verb: 'get' }
    });

    Author.AuthorDelete = function(id, callback) {
        
        Author.findById(id, function(findErr, authorInstance) {
            if (findErr) {
                return callback(findErr);
            } else if (authorInstance == null) {
                return callback(new NoExistingAuthorError('No such existing Author'));
            }

            Author.app.models.Task.destroyAll({ authorId: id }, function(err) {
                if (err) {
                    return callback(err);
                }

                Author.destroyById(id, function(authorErr) {
                    if (authorErr) {
                        return callback(authorErr);
                    }

                    callback(null, { message: 'Author and all associated tasks successfully deleted' });
                });
            });
        });
    };

    Author.remoteMethod('AuthorDelete', {
        accepts: {arg: 'id', type: 'number', required: true, http: {source: 'path'}},
        returns: {arg: 'message', type: 'string'},
        http: {path: '/AuthorDelete/:id', verb: 'delete'}
    });

    Author.customViewAllTasks = function(authorId, callback) {
      
        Author.findById(authorId, {include: 'tasks'}, function(err, authorInstance) {
            if (err) {
                callback(err);
                return;
            }
            if (!authorInstance) {
                callback(new NoExistingAuthorError('Author not found'));
                return;
            }
            
            const tasks = authorInstance.tasks();
            callback(null, tasks);
        });
    };

  
    Author.remoteMethod('customViewAllTasks', {
        accepts: {arg: 'authorId', type: 'number', required: true},
        returns: {arg: 'tasks', type: 'array'},
        http: {path: '/:id/customViewAllTasks', verb: 'get'}
    });

    Author.customExist = function(name, callback) {
        Author.findOne({ where: { name: name } }, function(err, author) {
            if (err) {
                callback(err);
            } else {
                if (author) {    
                    callback(null, { exists: true, id: author.id });
                } else {      
                    callback(null, { exists: false });
                }
            }
        });
    };
    

    Author.remoteMethod('customExist', {
        accepts: { arg: 'name', type: 'string', required: true, http: { source: 'query' } },
        returns: { arg: 'exists', type: 'boolean' },
        http: { path: '/customExist', verb: 'get' }
    });
        
};
