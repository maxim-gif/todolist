// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { appSlice, addTask, changeTaskStatus, InitialState, TaskValue } from './store/slice/slice';

describe('appSlice', () => {
  let initialState: InitialState;

  beforeEach(() => {
    initialState = {
      tasksData: [
        { name: "Тестовое задание", status: false },
        { name: "Прекрасный код", status: true },
        { name: "Покрытие тестами", status: false },
      ],
    };
  });

  it('тест добавление задачи (addTask)', () => {
    const newTask: TaskValue = { name: "Новая задача", status: false };
    const action = addTask(newTask);
    const state = appSlice.reducer(initialState, action);

    
    expect(state.tasksData.length).toBe(initialState.tasksData.length + 1);
    expect(state.tasksData).toContainEqual(newTask);
  });
  it('тест изменения задачи (changeTaskStatus)', () => {
    const action = changeTaskStatus("Покрытие тестами");
    const state = appSlice.reducer(initialState, action);
    const initialTask = initialState.tasksData.find(task => task.name === "Покрытие тестами");
    const updatedTask = state.tasksData.find(task => task.name === "Покрытие тестами");
    expect(updatedTask).toBeDefined();
    expect(updatedTask?.status).toBe(!initialTask?.status);
    
  });
});
