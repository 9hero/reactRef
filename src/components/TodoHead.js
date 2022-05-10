import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px;
  border-bottom: 1px solid #f7ff93;

  h1 {
    margin: 0;
    font-size: 36px;
    color: white;
  }

  .day {
    margin-top: 4px;
    color: white;
    font-size: 21px;
  }

  .tasks-left {
    color: white;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-kr", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", {
    weekday: "long",
  });

  return (
    <TodoHeadBlock>
      <h1>2022 07 21</h1>
      <div className="day">일요일</div>
      <div className="tasks-left">{undoneTasks.length}의 할일</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
