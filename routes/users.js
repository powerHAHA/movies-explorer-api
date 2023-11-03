const router = require('express').Router();
const { validateUpdateUserInfo } = require('../middlewares/validate');

const {
  getCurrentUserInfo,
  updateUserInfo,
} = require('../controllers/users');

router.get('/me', getCurrentUserInfo);
router.patch('/me', validateUpdateUserInfo, updateUserInfo);
module.exports = router;
