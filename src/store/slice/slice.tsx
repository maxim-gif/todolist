import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TaskValue {
  name: string;
  status: boolean;
}

export interface InitialState {
  tasksData: TaskValue[];
}

export interface RootState {
  todo: InitialState;
}

const initialState: InitialState = {
  tasksData: [
    { name: "Тестовое задание", status: false },
    { name: "Прекрасный код", status: true },
    { name: "Покрытие тестами", status: false },
  ],
};

export const appSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTask: (state, action: PayloadAction<TaskValue>) => {
      state.tasksData.push(action.payload);
    },
    changeTaskData: (state, action: PayloadAction<TaskValue[]>) => {
      state.tasksData = action.payload;
    },
    changeTaskStatus: (state, action: PayloadAction<string>) => {
      const task = state.tasksData.find(task => task.name === action.payload);
      if (task) {
        task.status = !task.status;
      }
    },
  },
});

export const { addTask, changeTaskStatus,changeTaskData } = appSlice.actions;

export default appSlice.reducer;
