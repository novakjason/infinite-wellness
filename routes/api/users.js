const router = require('express').Router();
const userController = require('../../controllers/userController');

// matches with "/api/users"
router.route('/')
    .get(userController.findAll);

// matches with "/api/users/:id"
router
    .route('/:id')
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);

// matches with "/api/users/register"
router.route("/register")
    .post(userController.create);

module.exports = router;
