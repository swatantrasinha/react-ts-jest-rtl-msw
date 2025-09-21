import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todo = () => {
        const getTodoList = () => {
        const storedItems= localStorage.getItem('todo')
        if(storedItems) {
            const parsedStoredItems= JSON.parse(storedItems)
            return parsedStoredItems
        }
        return null
    }

    const [todoList, setTodoList] = useState(getTodoList())
    
    const onAddTodo = (task:string) => {
        const taskObj= {
                id: new Date().toISOString(),
                text: task
            }
        const storedItems = localStorage.getItem('todo')
        let itemToStore: any=[]
        if(!storedItems) {
            itemToStore.push(taskObj)
        } else {
            const parsedStoredItems = JSON.parse(storedItems)
            itemToStore = [...parsedStoredItems, taskObj]
        }
        setTodoList(itemToStore)
        localStorage.setItem('todo', JSON.stringify(itemToStore))
    }
  
    const onDeleteTodo =  (id:string) => {
        console.log(' onDeleteTodo called !!!', id)
        
        const currentTodoList= [...todoList]
        console.log('currentTodoList: ', todoList)
        for(let i=0; i<currentTodoList.length; i++) {
            if(currentTodoList[i].id === id) {
                currentTodoList.splice(i, 1)
                break;
            }
        }
        console.log('updatedCurrentTodoList: ', currentTodoList)
        localStorage.setItem('todo', JSON.stringify(currentTodoList))
        setTodoList(currentTodoList)
    }
    


    


  return (
    <div>
        <TodoForm onAddTodo={onAddTodo} />
        <hr/>
        <TodoList items={todoList || []} onDeleteTodo={onDeleteTodo}/>
      
    </div>
  )
}

export default Todo
