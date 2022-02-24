import logo from './logo.svg';
import './App.scss';
import Input from './components/Input';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Input />
        <Post />
      </div>
    </div>
  );
}

export default App;
