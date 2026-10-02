import { employees, IEmployee } from "./constants/employees";

interface IEmployees {}

export function Employees(props: IEmployees) {
  const selectedItem = null;

  return (
    <div className="bg-gray-800 text-white p-5">
      <h2 className="text-2xl font-semibold border-b-2 border-gray-700 mb-5">
        Сотрудники
      </h2>

      <div className="flex flex-col gap-1 items-start">
        {employees.map((employee: IEmployee) => (
          <div
            key={employee.id}
            className={`px-2 py-1 rounded-lg transition-all w-full font-medium cursor-pointer ${
              selectedItem?.id === employee.id ? "bg-blue-500 text-white" : ""
            }`}
          >
            {employee.name}
          </div>
        ))}
      </div>
    </div>
  );
}
