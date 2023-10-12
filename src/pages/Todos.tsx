import { FunctionComponent, PropsWithChildren } from "react";
import { useFetch } from "../hooks/useFetch";
import { Todo } from "../utils/types";
type TodoProps = PropsWithChildren<{ todos: Todo[] }>;
const Todos: FunctionComponent<TodoProps> = () => {
  const [isLoading, todos, errors] = useFetch<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <div>
      {(errors as Error) && (
        <div
          className="p-4 text-sm text-red-600 border border-red-200 rounded-md bg-red-50"
          role="alert"
        >
          <span className="font-bold">Danger</span>{" "}
          {(errors as Error).toString()}
        </div>
      )}
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          <ul className="space-y-3 text-sm">
            { (todos as Todo[]) && (todos as Todo[]).map((todo: Todo) => (
              <li className="flex space-x-3" key={todo.id}>
                <svg
                  className="flex-shrink-0 w-6 h-6"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                    fill="currentColor"
                    className={`fill-${todo.completed ? "red" : "green"}-500`}
                  />
                  <path
                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                    fill="currentColor"
                    className="fill-white"
                  />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">
                  {todo.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Todos;
