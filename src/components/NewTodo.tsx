import React, { useRef } from 'react';

const NewTodo: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
  };

  return <form onSubmit={todoSubmitHandler}>
    <div>
      <label htmlFor="todo-text">Todo内容</label>
      <input type="text" id="todo-text" ref={textInputRef} />
    </div>
    <button type="submit">Todo追加</button>
  </form>
};

export default NewTodo;
