import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import Update from "./update";

const Todo = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  // const [id, setId] = useState(0);
  function addTask() {
    if (!task) {
      return alert("Your task filed is empty, please enter a valid task");
    } else {
      setTaskList((oldData) => {
        return [{ id: uuidv4(), task: task }, ...oldData];
      });
      console.log(taskList);
      // setId((prev) => {
      //   return (prev += 1);
      // });
      setTask("");
    }
  }
  const deleteTask = (index) => {
    setTaskList(() => {
      return taskList.filter((item) => item.id !== index);
    });
  };
  const updateTask = () => {
    setTask(true);
    console.log(task);
  };

  /* <button onClick={(e) => setTask(e.target.value)}>Submit</button> */

  return (
    <>
      <input
        type="text"
        name="task"
        value={task}
        placeholder="Enter the task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <h1>My tasks are as follows.</h1>
      <ol>
        {taskList.map((item) => {
          return (
            <>
              <li key={item.id}>{item.task}</li>
              <button onClick={(e) => deleteTask(item.id)}>Delete task</button>
              <button onClick={(e) => updateTask()}>Update task</button>
              {task === true ? (
                <>
                  <input type="text" value={item.task} />
                  <button>Submit</button>
                </>
              ) : (
                <></>
              )}
            </>
          );
        })}
      </ol>
    </>
  );
};
export default Todo;
