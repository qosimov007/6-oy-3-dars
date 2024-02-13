import cars from './componets/cars'
import './App.css'

function App() {
 
  return (
    <>
   <h1>Todo App</h1>
    <input type="text" id="todoInput" placeholder="Todo matnini kiriting" />
    <button onclick="addTodo()">Qo'shish</button>
    <ul id="todoList"></ul>
    </>
  )
}

export default App

