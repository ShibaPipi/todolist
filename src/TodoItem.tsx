import { FC, ReactNode } from "react";

interface TodoItemProps {
  content: ReactNode;
  handleClick: () => void;
}

export const TodoItem: FC<TodoItemProps> = ({ content, handleClick }) => (
  <div onClick={handleClick}>{content}</div>
);
