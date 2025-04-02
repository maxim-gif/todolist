import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(234 237 237);
  padding: 0 10px;
`;

export const Tittle = styled.h1`
  font-size: 100px;
  font-weight: 300;
  color: rgb(215, 205, 216);
`;


export const InputWrapper = styled.div`
  width: 100%;
  max-width:700px;
  height: 70px;
  box-shadow: 2px 2px 10px grey;
  position:relative;
`;

export const AddTaskButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgb(215, 205, 216); 
  position:absolute;
  right: 20px;
  top:10px;
  background-color: white;
  background-position: center;
  background-image: url('/plus.png');
`;

export const TaskTextInput = styled.input`
  border: 1px solid gray;
  height: 100%;
  width: 100%;
  font-size: 22px;
  padding: 0 80px 0 20px;
  &::placeholder {
    color: rgb(213, 214, 214);
    font-style: italic;
  }
  &:focus {
    outline: none;
  }
`;
export const ControlPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width:700px;
  height: 50px;
  border: 1px solid gray;
  background-color: white;
  border-top: none;
  box-shadow: 2px 2px 10px grey;
  padding: 0 10px;
`;
export const BoxCenter = styled.div`
  display: flex;
`;
export const ItemLeft = styled.span`
  color: grey;
  font-size: 18px;
    @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const buttonMixin = css`
  height: 30px;
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 0 5px;
  border-radius: 5px;
  border: 2px solid white;
   @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const AllItem = styled.button<{ $status: string }>`
  ${buttonMixin}
  border: ${({ $status }) =>
    $status === "true" ? "2px solid rgb(215, 205, 216)" : "2px solid white"};
`;
export const ActiveItem = styled(AllItem)``;
export const CompletedItem = styled(AllItem)``;
export const ClearCompleted = styled.button`
  ${buttonMixin}
`;
