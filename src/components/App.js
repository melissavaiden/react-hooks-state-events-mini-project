import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState('All')
  function deleteTask(deletedTask) {
    setTasks(tasks.filter((task) => task.text !== deletedTask))
  }

  const visibleTasks = tasks.filter((task) => category === 'All' || task.category === category)

  function handleSubmit(event, newItem) {
    event.preventDefault();
    setTasks([...TASKS, newItem])

  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} setSelectedCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleSubmit}/>
      <TaskList tasks={visibleTasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
