const  {Router} = require("express");
const { gettodo,save,edit,deletetodo}= require("../controllers/todoc");
const router = Router()

router.get('/', gettodo)
router.post('/save', save)
router.post('/edit', edit)
router.post('/delete', deletetodo)

module.exports = router;