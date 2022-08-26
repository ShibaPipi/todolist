import { FC, useCallback, useState } from "react";

import { TodoItem } from "./TodoItem";

import "./style.css";

export const TodoList: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState<string[]>([]);

  const handleBtnClick = useCallback(
    () => {
        setList((prevList) => [...prevList, inputValue])
        setInputValue('')
    },
    [inputValue, setInputValue, setList]
  );

  const handleItemDelete = useCallback((index: number) => {
    setList((prevList) => {
      const list = [...prevList];
      list.splice(index, 1);

      return list;
    });
  }, [setList]);

  return (
    <>
      <div>
        <label htmlFor="insertArea">输入内容</label>
        <input
          type="text"
          value={inputValue}
          onChange={({ target: { value } }) => setInputValue(value)}
        />
        <button onClick={handleBtnClick}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => (
          <TodoItem
            key={index}
            content={item}
            handleClick={() => handleItemDelete(index)}
          />
        ))}
      </ul>
    </>
  );
};
