import List from "./list";

const Map = ({
  taskList,
  updateTask,
  setNewTask,
  submitTask,
  updateId,
  newTask,
  deleteTask,
}) => {
  return (
    <>
      <ol>
        {taskList.map((item, index) => {
          return (
            <>
              <List
                item={item}
                index={index}
                updateTask={updateTask}
                setNewTask={setNewTask}
                submitTask={submitTask}
                updateId={updateId}
                newTask={newTask}
                deleteTask={deleteTask}
              />
            </>
          );
        })}
      </ol>
    </>
  );
};
export default Map;
