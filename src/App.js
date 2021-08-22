import { HookCounter, ClassCounter } from "./components/Counter/Counter";
import ReducerCounter from "./components/Counter/ReduxCounter/index";

import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1>Redux Demo Application</h1>
      {/* <HookCounter />
      <ClassCounter />
      <ReducerCounter /> */}

      <Todo />
    </div>
  );
}

export default App;
