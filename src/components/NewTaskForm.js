import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [taskName, setTaskName] = useState('')
  const [taskCategory, setTaskCategory] = useState('Code')

  const selections = categories.filter((item) => item !== 'All')
  const newSelections = selections.map((item) => {
    return <option value={item} key={item}>{item}</option>
  })
  function handleNameChange(event) {
    setTaskName(event.target.value)
  }

  function handleCatChange(event) {
    setTaskCategory(event.target.value)
  }

  function handleSubmit(event) {
    const newItem = {
      text: taskName,
      category: taskCategory,
    };
    onTaskFormSubmit(event, newItem)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleNameChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCatChange}>
          {newSelections}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
