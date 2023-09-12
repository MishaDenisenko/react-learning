import './App.css';
import {useState} from "react";
function App() {

    const [taskList, setTaskList] = useState([]);

    const handleSubmit = (taskName) => {
        const task = {
            text: taskName,
            isCompleted: false,
        };

        setTaskList(prevState => prevState.concat(task))
    }

    return (
        <div className="App">
            <div className="container">
                <section className="add-task">
                    <input type={"text"} className={"task-input"}/>
                    <button type={"submit"} onClick={handleSubmit}>ADD</button>
                </section>
                <section className="task-list"></section>
                <br/>
                <section className="task-list"></section>
            </div>
        </div>
    );
}

export default App;
