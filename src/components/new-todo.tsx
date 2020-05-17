import React, { useRef } from 'react';

import './new-todo.css';

// would usually do an interface here, but doing type as demonstration
type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = props => {
    // react hook that creates a ref object that points to a DOM element
    // input element is stored, so that is type assigned. Null value as default
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        // prevent sending request to server, handing only in JS
        event.preventDefault();
        // ! to let TS know that the value will not be null
        const enteredText = textInputRef.current!.value;
        console.log(enteredText);
        props.onAddTodo(enteredText);
    }; 
    return (
        <form onSubmit={todoSubmitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text">Todo List</label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit">Add Todo</button>
        </form>
    );
}; 

export default NewTodo;