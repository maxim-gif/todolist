import styled from 'styled-components'

export const TaskWrapper = styled.div`
display: flex;
align-items: center;
width: 100%;
max-width:700px;
border: 1px solid gray;
border-top: none;
height:70px;
gap:20px;
background-color: white;
box-shadow: 2px 2px 10px grey;
`
export const TaskMark = styled.div<{ $completed: string }>`
height:50px;
width:50px;
border: 1px solid gray;
border-radius: 50%;
margin-left:10px;   
background-position: center;
background-repeat: no-repeat;
background-image: url('/mark.png');
background-image: ${({ $completed }) => 
    $completed === "true" ? "url('https://maxim-gif.github.io/todolist/mark.png')" : "none"};
`
export const TaskText = styled.span<{ $completed: string }>`
font-size: 22px;
color: ${({ $completed }) => ($completed === "true" ? 'rgb(213, 214, 214)' : 'black')};
text-decoration: ${({ $completed }) => ($completed === "true" ? 'line-through' : 'none')};
`