import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TodoList from '../components/TodoList'
import Todo from '../Model/Todo'


const App = () => (
  <div className="ms-Grid" dir="ltr">
    <Header />
    <TodoList />
    <Footer />
  </div>

)

export default App