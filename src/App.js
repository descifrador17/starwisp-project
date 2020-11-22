import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotepadPage from './pages/NotepadPage';
import Store from './store/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <div className="App">
          <Route path={"/"} exact component={Home} />
          <Route path={"/notepad"} exact component={NotepadPage} />
        </div>
      </Provider>
    </BrowserRouter>

  );
}

export default App;
