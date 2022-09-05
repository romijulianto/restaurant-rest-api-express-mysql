const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controller')
router.get("/",employeeController.getAll);
router.post("/",employeeController.post);
router.put("/:id",employeeController.put);
router.delete("/:id",employeeController.remove);
module.exports = router;