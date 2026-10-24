import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  for (let i = 0; i < 12; i++) {
    await createEmployee({
      name: "Employee" + [i],
      birthday: "2026-4-10",
      salary: Math.floor(Math.random() * 50000),
    });
  }
}
