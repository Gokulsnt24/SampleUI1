import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import Update from "./update";

const Todo = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  // const [id, setId] = useState(0);
  const [updateId, setUpdateId] = useState(null);
  const [newTask, setNewTask] = useState("");
  function addTask() {
    if (!task) {
      return alert("Your task filed is empty, please enter a valid task");
    } else {
      setTaskList((oldData) => {
        // setUpdateId(0);
        return [{ id: uuidv4(), task: task }, ...oldData];
      });
      // console.log(taskList);
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
  const updateTask = (item) => {
    setNewTask("");
    setUpdateId(item.id);
    // setTask(item.task);
  };
  const submitTask = (id) => {
    console.log("new", newTask);
    setTaskList((old) => {
      console.log("old", old);
      old.map((item) => {
        console.log(item);
        if (item.id === id) {
          console.log("before update", item);
          return (item.task = newTask);
          console.log("updated", item);
          // console.log("check", item.id, id);
          // console.log("up", updateId);
        } else {
          return item;
        }
      });
      return old;
    });
    setUpdateId(null);
    setNewTask("");
  };

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
        {console.log("list", taskList)}
        {taskList.map((item, index) => {
          // console.log(item);
          return (
            <>
              <li key={index}>{item.task}</li>
              <button onClick={(e) => deleteTask(item.id)}>Delete task</button>
              <button onClick={(e) => updateTask(item)}>Update task</button>
              {updateId === item.id ? (
                <>
                  <input
                    type="text"
                    value={newTask}
                    placeholder="Enter new task"
                    onChange={(e) => setNewTask(e.target.value)}
                  />
                  <button onClick={() => submitTask(item.id)}>Submit</button>
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