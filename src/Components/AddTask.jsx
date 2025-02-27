import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(""); // State for due date
  const [reminder, setReminder] = useState(false); // State for reminder
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve existing tasks from localStorage or initialize an empty array
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Create a new task object with due date and reminder
    const newTask = {
      title,
      description,
      dueDate,
      reminder,
      completed: false, // Default to not completed
    };

    // Add the new task to the tasks array
    tasks.push(newTask);

    // Save the updated tasks array back to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Log the saved tasks for debugging
    console.log("Tasks saved:", tasks);

    // Show a success message
    alert("Task added successfully!");

    // Navigate to the TodoApp page
    navigate("/TodoApp");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
      {/* Modal Container */}
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 mt-16">
        {/* Back Button */}
        <button
          className="text-gray-600 hover:text-gray-800 mb-4"
          onClick={() => {
            navigate("/TodoApp");
          }}
        >
          ← Go Back
        </button>

        {/* Header */}
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Add New Task</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={5} // Makes the input larger for paragraphs
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Due Date Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Due Date
            </label>
            <input
              type="date"
              name="dueDate"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Reminder Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="reminder"
              checked={reminder}
              onChange={(e) => setReminder(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
            />
            <label className="ml-2 text-sm font-medium text-gray-700">
              Set Reminder
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}