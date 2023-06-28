/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  // RESTFULL风格
  router.resources('/api/todo', controller.todo);
};
