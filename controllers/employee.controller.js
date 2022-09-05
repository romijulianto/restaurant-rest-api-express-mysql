const { Employee } = require("../models");

const getAll = async (req, res) => {
  const employeeList = await Employee.findAll();
  res.statusCode = 200;
  res.json(employeeList);
};

const post = async (req, res) => {
  var employee = req.body;
  const createdEmployee = await Employee.create(employee);
  res.statusCode = 201;
  res.json(createdEmployee);
};

const  put = async (req, res) => {
  var id = req.params.id;
  var employee = req.body;
  var updateCondition = {where : {id : id}}
  await Employee.update(employee,updateCondition);
  res.status(204).end();
};

const remove = async (req,res) => {
  var id = req.params.id;
  var deleteCondition = {where : {id : id}};
  await Employee.destroy(deleteCondition);
  res.status(204).end();
}
module.exports = { getAll, post,put,remove };
