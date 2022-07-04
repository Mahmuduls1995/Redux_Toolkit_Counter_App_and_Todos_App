import logo from './logo.svg';

import './App.css';
import CounterView from './features/counter/CounterView';
import PostsView from './features/posts/PostsView';

function App() {
  return (
    <div className="App">
      <h2>Counter App</h2>
      <CounterView></CounterView>
      <PostsView></PostsView>
    </div>
  );
}

export default App;
