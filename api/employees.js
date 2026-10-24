import { getEmployees } from "#db/queries/employees";
import express from "express";
const router = express.Router();
export default router;

// TODO: this file!
router.get("/", async (req, res) => {
  const employees = await getEmployees();
  console.log(employees);
  res.send(employees);
});
