import * as S from './task.style'
import { changeTaskStatus } from '../../store/slice/slice';
import { useDispatch } from "react-redux";

interface TaskProps {
    taskData: {
      name: string;
      status: boolean;
    };
  }

export const Task: React.FC<TaskProps> = ({ taskData }) => {

  const dispatch = useDispatch();

  return (
    <S.TaskWrapper>
        <S.TaskMark $completed={taskData.status.toString()} onClick={() => {dispatch(changeTaskStatus(taskData.name))}}></S.TaskMark>
        <S.TaskText $completed={taskData.status.toString()}>{taskData.name}</S.TaskText>
    </S.TaskWrapper>
  );
}
