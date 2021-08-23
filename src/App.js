import { HookCounter, ClassCounter } from "./components/Demo1/Counter";
import ReducerCounter from "./components/Demo1/ReduxCounter/index";
import Todo from "./components/Demo2/Todo";
import MovieAppWrapper from './components/Demo3/MovieApp';

import ReduxThunkShoppingCart from './components/Demo4/ReduxThunkShoppingCart'

function App() {
  return (
    <div className="App">
      <h1>Redux Demo Application</h1>
      
      {/* Counter Without Redux Demo */}
      <HookCounter />
      <ClassCounter />
      
      {/* Counter With Redux Demo */}
      <ReducerCounter />

      {/* Redux Todo Demo */}

      <Todo />

      {/* Redux Movie App Fetch API Demo using router */}
      <MovieAppWrapper />

      {/* Redux Shopping Cart Demo using Middleware redux-thunk */}
      <ReduxThunkShoppingCart />
    </div>
  );
}

export default App;
