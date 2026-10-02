import { IEmployee } from "./constants/employees";

export function Employee(props: IEmployee) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-9xl">{props.avatar}</div>
      <div className="flex flex-col self-center">
        <h3 className="font-semibold text-4xl">{props.name}</h3>
        <p className="text-xl text-gray-600">{props.position}</p>
        <p className="text-l text-gray-400">{props.email}</p>
        <p className="text-l text-gray-400">{props.phone}</p>
      </div>
    </div>
  );
}
