import {Task} from "./Task";

export function TaskList({taskList, onToggle, onDelete}) {
    return (
        <div>
            {taskList.map(task =>
                <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete}/>
            )}
        </div>
    )
}