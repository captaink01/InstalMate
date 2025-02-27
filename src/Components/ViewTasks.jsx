import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ViewTask() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedDueDate, setEditedDueDate] = useState("");
  const [editedReminder, setEditedReminder] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
    alert("Task deleted successfully!");
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedTitle(tasks[index].title);
    setEditedDescription(tasks[index].description);
    setEditedDueDate(tasks[index].dueDate);
    setEditedReminder(tasks[index].reminder);
  };

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
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
    setEditingIndex(null);
    alert("Task updated successfully!");
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 mt-16">
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <h1 className="text-2xl font-bold mb-4">Task List</h1>

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
                <input
                  type="checkbox"
                  checked={task.completed || false}
                  onChange={() => handleToggleComplete(index)}
                  className="w-5 h-5 rounded border-gray-300 text-green-500 focus:ring-green-500"
                />

                <div>
                  {editingIndex === index ? (
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
                    <div>
                      <h3
                        className={`text-lg font-semibold ${
                          task.completed
                            ? "line-through text-gray-500"
                            : "text-gray-800"
                        }`}
                      >
                        {task.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          task.completed
                            ? "line-through text-gray-400"
                            : "text-gray-600"
                        }`}
                      >
                        {task.description}
                      </p>
                      <p className="text-sm text-gray-500">
                        Due: {task.dueDate}
                      </p>
                      {task.reminder && (
                        <p className="text-sm text-blue-500">Reminder Set</p>
                      )}
                    </div>
                  )}
                </div>
              </div>

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
