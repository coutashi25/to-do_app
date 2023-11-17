import TodosRoute from "./pages/TodosRoute";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodosRoute />} />
      </Routes>
    </div>
  );
}

export default App;
