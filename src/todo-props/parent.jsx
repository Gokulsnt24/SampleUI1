import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "./button";
import InputBox from "./input";
import Map from "./map";

const Parent = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [updateId, setUpdateId] = useState(null);
  const [newTask, setNewTask] = useState("");
  function addTask() {
    if (!task) {
      return alert("Your task filed is empty, please enter a valid task");
    } else {
      setTaskList((oldData) => {
        return [{ id: uuidv4(), task: task }, ...oldData];
      });
      setTask("");
    }
  }
  const deleteTask = (index) => {
    setTaskList(() => {
      return taskList.filter((item) => item.id !== index);
    });
  };
  const updateTask = (item) => {
    setNewTask(item.task);
    setUpdateId(item.id);
  };
  const submitTask = (id) => {
    setTaskList((old) => {
      old.map((item) => {
        if (item.id === id) {
          return (item.task = newTask);
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
      <InputBox setTask={(value) => setTask(value)} value={task} />
      <Button onClick={addTask} label={"Add task"} />
      <h1>My tasks are as follows.</h1>
      <Map
        taskList={taskList}
        updateTask={updateTask}
        setNewTask={setNewTask}
        submitTask={submitTask}
        updateId={updateId}
        newTask={newTask}
        deleteTask={deleteTask}
      />
    </>
  );
};
export default Parent;
