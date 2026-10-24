import {
  createEmployee,
  getEmployee,
  getEmployees,
} from "#db/queries/employees";
import express from "express";
const router = express.Router();
export default router;

// TODO: this file!
router.get("/", async (req, res) => {
  const employees = await getEmployees();
  console.log(employees);
  res.send(employees);
});

router.post("/", async (req, res) => {
  if (!req.body) {
    return res.status(400).send("req body is not provided");
  }
  const { name, birthday, salary } = req.body;
  if (!name || !birthday || !salary) {
    return res.status(400).send("missing required field");
  }
  const employee = await createEmployee({ name, birthday, salary });
  res.status(201).send(employee);
});

router.param("id", async (req, res, next, id) => {
  const employee = await getEmployee(id);
  if (!employee) {
    return res.status(404).send("employee not exist with given id");
  }
  req.employee = employee;
  next();
});
