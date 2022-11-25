import React from 'react'
import { StyledTodo, TodoColor, TodoColorContainer, TodoDescription } from './todo.styled'

interface TodoProps {
  dateTime: string
  description: string
  soon: boolean
}

const Todo: React.FC<TodoProps> = ({ dateTime, description, soon }) => {
  return (
    <StyledTodo>
      <TodoColorContainer>
        <TodoColor soon={soon} />
      </TodoColorContainer>
      <TodoDescription>
        <p>{dateTime}</p>
        <h2>{description}</h2>
      </TodoDescription>
    </StyledTodo>
  )
}

export default Todo
