

import { useEffect, useState } from "react";


export default function ViewTask() {
  const [tasks, setTasks] = useState([]); // State to store tasks
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [editingIndex, setEditingIndex] = useState(null); // State to track which task is being edited
  const [editedTitle, setEditedTitle] = useState(""); // State for edited title
  const [editedDescription, setEditedDescription] = useState(""); // State for edited description
  const [editedDueDate, setEditedDueDate] = useState(""); // State for edited due date
  const [editedReminder, setEditedReminder] = useState(false); // State for edited reminder
  

  // Fetch tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Function to handle task deletion
  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Remove the task at the specified index
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Update localStorage
    setTasks(updatedTasks); // Update state
    alert("Task deleted successfully!");
  };

  // Function to handle task completion toggle
  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Update localStorage
    setTasks(updatedTasks); // Update state
  };

  // Function to handle editing a task
  const handleEdit = (index) => {
    setEditingIndex(index); // Set the task being edited
    setEditedTitle(tasks[index].title); // Populate the edited title
    setEditedDescription(tasks[index].description); // Populate the edited description
    setEditedDueDate(tasks[index].dueDate); // Populate the edited due date
    setEditedReminder(tasks[index].reminder); // Populate the edited reminder
  };

  // Function to save the edited task
  const handleSaveEdit = () => {
    const updatedTasks = tasks.map((task, i) =>
      i === editingIndex
        ? {
            ...task,
            title: editedTitle,
            description: editedDescription,
            dueDate: editedDueDate,
            reminder: editedReminder,
          }
        : task
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Update localStorage
    setTasks(updatedTasks); // Update state
    setEditingIndex(null); // Exit edit mode
    alert("Task updated successfully!");
  };

  // Function to filter tasks based on the search query
  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {filteredTasks.length === 0 ? (
        <p className="text-gray-600">No tasks found.</p>
      ) : (
        <ul>
          {filteredTasks.map((task, index) => (
            <li
              key={index}
              className={`p-4 border rounded-lg mb-2 flex justify-between items-center ${
                task.completed ? "bg-green-50" : "bg-white"
              }`}
            >
              <div className="flex items-center space-x-4">
                {/* Completion Checkbox */}
                <input
                  type="checkbox"
                  checked={task.completed || false}
                  onChange={() => handleToggleComplete(index)}
                  className="w-5 h-5 rounded border-gray-300 text-green-500 focus:ring-green-500"
                />

                {/* Task Details */}
                <div>
                  {editingIndex === index ? (
                    // Edit Mode
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        className="w-full p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                        className="w-full p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="date"
                        value={editedDueDate}
                        onChange={(e) => setEditedDueDate(e.target.value)}
                        className="w-full p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={editedReminder}
                          onChange={(e) => setEditedReminder(e.target.checked)}
                          className="w-5 h-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                        />
                        <label className="ml-2 text-sm font-medium text-gray-700">
                          Set Reminder
                        </label>
                      </div>
                      <button
                        onClick={handleSaveEdit}
                        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    // View Mode
                    <div>
                      <h3
                        className={`text-lg font-semibold ${
                          task.completed ? "line-through text-gray-500" : "text-gray-800"
                        }`}
                      >
                        {task.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          task.completed ? "line-through text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {task.description}
                      </p>
                      <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
                      {task.reminder && (
                        <p className="text-sm text-blue-500">Reminder Set</p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Actions (Edit and Delete Buttons) */}
              <div className="flex space-x-2">
                {editingIndex !== index && (
                  <button
                    onClick={() => handleEdit(index)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDelete(index)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}