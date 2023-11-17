import TodosCreate from "./TodosCreate";
import TodosList from "./TodosList";

const TodosRoute = () => {
  return (
    <div>
      <div>
        <TodosCreate />
        <TodosList />
      </div>
    </div>
  );
};

export default TodosRoute;