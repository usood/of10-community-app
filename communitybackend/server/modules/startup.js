import seedDatabase from './seed-database';

let startup = () => {
  _setEnvironmentVariables();
  _setBrowserPolicies();
  //_generateAccounts();
  //_setGravatars();
  _seedDatabase();
  _configureServices()
};

var _setEnvironmentVariables = () => Modules.server.setEnvironmentVariables();

var _setBrowserPolicies = () => {Modules.server.setBrowserPolicies();};

var _generateAccounts = () => Modules.server.generateAccounts();

var _seedDatabase = () => seedDatabase();

var _configureServices = () => Modules.server.configureServices();

//var _setGravatars = () => Modules.server.setGravatars();

Modules.server.startup = startup;
