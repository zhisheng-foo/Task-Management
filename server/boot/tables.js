module.exports = function(app) {
    // Get the data sources defined in your `datasources.json` file
    var dataSource = app.dataSources.postgresDs; // Replace with your data source name
  
    // Automigrate or Autoupdate your models
    dataSource.automigrate(['Task', 'Author'], function(err) {
      if (err) throw err;
      console.log('Tables created (or updated) for models: Task, Author');
    });
  };
  