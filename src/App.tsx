import * as S from "./App.style";
import "./index.css";
import { Task } from "./components/task/task";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/slice/slice";
import { useState, useEffect } from "react";
import { TaskValue, addTask, changeTaskData } from "./store/slice/slice";

type TaskStatus = "All" | "Active" | "Completed";

function App() {
  const dispatch = useDispatch();


  const [selectTasks, setSelectTasks] = useState<TaskValue[]>();
  const [textInput, setTextInput] = useState<string>("");
  const [itemLeft, setItemLeft] = useState<number>(0);
  const [taskStatus, setTaskStatus] = useState<TaskStatus>("All");
  const tasksData = useSelector((state: RootState) => state.todo.tasksData);


  useEffect(() => {
    if (taskStatus === "All") {
      setSelectTasks(tasksData)
    }
    if (taskStatus === "Active") {
      const result = tasksData.filter((item) => item.status === false)
      setSelectTasks(result)
    }
    if (taskStatus === "Completed") {
      const result = tasksData.filter((item) => item.status === true)
      setSelectTasks(result)
    }
    let amount = tasksData.filter((item) => item.status === false);
    setItemLeft(amount.length);
  }, [taskStatus, tasksData]);

  return (
    <S.Wrapper>
      <S.Tittle>todos</S.Tittle>
      <S.InputWrapper>
        <S.TaskTextInput
          placeholder="What needs to be done"
          value={textInput}
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
        ></S.TaskTextInput>
        <S.AddTaskButton
          onClick={() => {
            dispatch(addTask({ name: textInput, status: false }));
            setTextInput("");
          }}
        ></S.AddTaskButton>
      </S.InputWrapper>
      {selectTasks !== undefined && selectTasks.map((item, index) => (
        <Task key={index} taskData={item} />
      ))}
      <S.ControlPanel>
        <S.ItemLeft>{itemLeft} item left</S.ItemLeft>
        <S.BoxCenter>
          <S.AllItem
            $status={taskStatus === "All" ? "true" : "false"}
            onClick={() => {
              setTaskStatus("All");
            }}
          >
            All
          </S.AllItem>
          <S.ActiveItem
            $status={taskStatus === "Active" ? "true" : "false"}
            onClick={() => {
              setTaskStatus("Active");
            }}
          >
            Active
          </S.ActiveItem>
          <S.CompletedItem
            $status={taskStatus === "Completed" ? "true" : "false"}
            onClick={() => {
              setTaskStatus("Completed");
            }}
          >
            Completed
          </S.CompletedItem>
        </S.BoxCenter>
        <S.ClearCompleted onClick={() => {dispatch(changeTaskData(tasksData.filter((item) => item.status === false )))}}>Clear completed</S.ClearCompleted>
      </S.ControlPanel>
    </S.Wrapper>
  );
}

export default App;
