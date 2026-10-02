import { clsx } from "clsx";

interface ILoading {
  className: string;
}

export function Loading(props: ILoading) {
  return (
    <div
      className={clsx(
        props.className,
        "flex flex-col justify-center items-center space-y-4"
      )}
    >
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-blue-500"></div>
    </div>
  );
}
