import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../redux/actions/todos";
import "./design/TodosCreate.scss"

const TodosCreate = () => {
  const dispatch = useDispatch();
  const { isLoadingPost, successPost, errorPost } = useSelector((state) => state.todos);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [validationError, setValidationError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoTitle.length === 0) {
      setValidationError("Title filed is required");
    } else if (todoDescription.length === 0) {
      setValidationError("Description filed is required");
    }

    if (todoTitle && todoDescription) {
      setTodoTitle("");
      setTodoDescription("");
      setValidationError("");

      dispatch(createTodo({ todoTitle, todoDescription }));
    }
  };

  useEffect(() => {
    if (successPost) {
      setSuccessMessage(successPost.message);
    } else if (errorPost) {
      setValidationError("Error: " + errorPost.message);
    }
  }, [successPost, errorPost]);

  useEffect(() => {
    setTimeout(() => {
      setSuccessMessage("");
      setValidationError("");
    }, 3000);
  }, [successMessage, validationError]);

  return (

    <div class="wrapper">
        <div class="title">
            TO-DO APPLICATION
        </div>
            <form onSubmit={(e) => {handleSubmit(e);}}>
            <div class="form" autoComplete="off">
                <div class="inputfield">
                    <label>Title</label>
                    <input 
                        type="text" 
                        class="input"
                        placeholder="enter to-do title" 
                        value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)}
                    />
                </div>  
                <div class="inputfield">
                    <label>Description</label>
                    <textarea 
                        class="textarea"
                        placeholder="enter to-do description" 
                        value={todoDescription} onChange={(e) => setTodoDescription(e.target.value)}
                    >

                    </textarea>
                </div> 
                <div class="inputfield">
                    <button type="submit" class="btn">
                        {isLoadingPost ? "Adding ... !!!" : "Add Todo"}
                    </button>
                </div>
            </div>
            </form>

        {validationError && (
            <div>
            <span>{validationError}</span>
            </div>
        )}

        {successMessage && (
            <div>
            <span>{successMessage}</span>
            </div>
        )}
    </div>
  );
};

export default TodosCreate;