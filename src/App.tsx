import { useState, useCallback } from "react";
import { Employees } from "./Employees";
import { EmployeeLoader } from "./EmployeeLoader";
import { Employee } from "./Employee";
import { Loading } from "./Loading";
import { IEmployee } from "./constants/employees";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex min-h-screen justify-start">
        <Employees />
        <div className="flex flex-col flex-grow justify-start items-start">
          <EmployeeLoader employeeId={1}>
            {(user: IEmployee | null) =>
              user === null ? (
                <Loading className="flex-grow w-full" />
              ) : (
                <Employee {...user} />
              )
            }
          </EmployeeLoader>
        </div>
      </div>
    </div>
  );
}

export default App;
