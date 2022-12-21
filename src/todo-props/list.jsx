import Button from "./button";
import InputBox from "./input";

const List = ({
  item,
  index,
  updateTask,
  setNewTask,
  submitTask,
  updateId,
  newTask,
  deleteTask,
}) => {
  return (
    <>
      <li>{item.task}</li>
      <Button onClick={(e) => deleteTask(item.id)} label={"Delete"} />
      <Button onClick={(e) => updateTask(item)} label={"Update"} />
      {updateId === item.id ? (
        <>
          <InputBox
            value={newTask}
            placeholder="Enter new task"
            setTask={setNewTask}
          />
          <Button onClick={() => submitTask(item.id)} label={"Submit"} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default List;
