/* eslint valid-jsdoc: "off" */

const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1550284917803_8371';

  // add your middleware config here
  config.middleware = [
    'responseTime',
  ];

  // Nunjucks 实现了在后台服务器显示内容的模板。
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
      '.tpl': 'nunjucks',
    },
  };

  // object relation map 映射
  // database 对应着一个文件todos.sqlite3
  config.orm = {
    dialect: 'sqlite',
    client: 'sqlite3',
    database: path.join(__dirname, '..', 'todos.sqlite3'),
    sequelize: true,
  };

  // add your user config here
  const userConfig = {
    responseTime: {
      headerKey: 'X-Response-Time',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
