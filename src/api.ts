import { employees, IEmployee } from "./constants/employees";

const DELAY = 800;
const LONG_DELAY = 2000;

export class EmployeeService {
  async delay(ms = DELAY) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async getEmployeeDetails(id) {
    try {
      await this.delay(id === 3 ? LONG_DELAY : DELAY);

      const employee = employees.find((f) => f.id === id);
      if (!employee) {
        throw new Error("Детальная информация не найдена");
      }

      return employee;
    } catch (error) {
      console.error(`${id}:`, error);
      throw error;
    }
  }

  getEmptyEmployee() {
    return null;
  }
}
