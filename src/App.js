import './App.css';
import MyForms from './components/MyForms';

function App() {
  return (
    <div className="App">
      <h1>Forms</h1>
    <MyForms user={{name:"Wes", email:"wes@wes.com", desc:"Aqui vem o texto", rol:"read"}}/>
    </div>
  );
}

export default App;
