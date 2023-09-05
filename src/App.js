
import './App.css';
import {Person} from "./components/Person";

function App() {
    const personProps = {
        name: 'michail',
        age: 22,
        city: 'kiev'
    }
    return (
        <div className="App">
            <Person name={personProps.name} age={personProps.age} city={personProps.city}/>
        </div>
    );
}

export default App;
