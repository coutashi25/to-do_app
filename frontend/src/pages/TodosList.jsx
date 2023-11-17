import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getAllTodos } from "../redux/actions/todos";
import "./design/TodosList.scss"

const TodosList = () => {
  const dispatch = useDispatch();
  const { isLoading, todos, error, isLoadingPost, isLoadingDelete } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getAllTodos);
  }, [dispatch, isLoadingPost, isLoadingDelete]);

  // make a function to handle delete a todo
  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodo({ todoId }));
  };

  return (

    <div class="container">
      <div class="box-container">

          {todos.results && todos.results.length === 0 ? (
            <h2>Sorry! No Todos Found.</h2>
          ) : (
            todos.results &&
            todos.results.map((todo, index) => (
              <div class="box" key={index}>
            
                <h3 className={todo.completed}>{todo.title}</h3>

                <p>{todo.description}</p>

                <button type="submit" class="btn" onClick={() => handleDeleteTodo(todo.id)}>
                  Delete
                </button>
                {/* <a onClick={() => handleDeleteTodo(todo.id)} class="btn">Delete</a> */}

              </div>
            ))
          )}
      </div>

      {isLoading && <span>Loading ... !!!</span>}
      {error && <span>Error: {error.message}</span>}

    </div>
  );
};

export default TodosList;