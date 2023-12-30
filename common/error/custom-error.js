'use strict';

// Custom ValidationError
class ExistingAuthorError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = 400;
    this.code = 'EXISTING_ERROR';
  }
}

class NoExistingAuthorError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = 400;
    this.code = 'NO_EXISTING_ERROR';
  }
}

class NoExistingTaskException extends Error {
  constructor(message) {
    super(message);
    this.name = 'NoExistingTaskException';
    this.statusCode = 404; 
  }
}


module.exports = {
  ExistingAuthorError,
  NoExistingAuthorError,
  NoExistingTaskException
};
