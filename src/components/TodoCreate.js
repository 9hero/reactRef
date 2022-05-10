import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const CircleButton = styled.button`
  background-color: #38d9;
  &:hover {
    background-color: #03045e;
  }
  &:active {
    background-color: #533e85;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);

  font-size: 60px;
  color: white;
  border-radius: 40%;

  border: none;
  outline: none;

  transition: 0.5s all ease-in;
  ${(prop) =>
    prop.open &&
    css`
      background-color: #1a132f;
      &:hover {
        background-color: #03045e;
      }
      &:active {
        background-color: #533e85;
      }
      transform: translate(-50%, 50%) rotate(225deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;
const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;
const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue("");
    setOpen(false);
    ++nextId.current;
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="할일을 입력하라"
              onChange={onChange}
              value={value}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd></MdAdd>
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);
