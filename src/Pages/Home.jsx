export default function Home() {
  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-8">
        TodoMate
      </h1>

      {/* Description */}
      <div className="bg-white bg-opacity-90 text-black text-lg leading-relaxed p-8 rounded-2xl shadow-lg max-w-2xl border border-gray-200">
        <p className="mb-6">
          Welcome to <span className="font-semibold text-blue-900">TodoMate</span>, your ultimate task management solution! Designed to help you stay organized and productive, TodoMate offers a seamless experience for managing your daily tasks with ease.
        </p>

        <p className="mb-6">
          With TodoMate, you can:
        </p>

        <ul className="list-disc list-inside space-y-3">
          <li>
            <span className="font-semibold">Add Tasks:</span> Quickly add new tasks with just a few clicks.
          </li>
          <li>
            <span className="font-semibold">Edit Tasks:</span> Easily update task details whenever needed.
          </li>
          <li>
            <span className="font-semibold">Delete Tasks:</span> Remove completed or unnecessary tasks effortlessly.
          </li>
          <li>
            <span className="font-semibold">Set Reminders:</span> Never miss a deadline with customizable reminders.
          </li>
          <li>
            <span className="font-semibold">Complete Tasks:</span> Mark tasks as done and keep track of your progress.
          </li>
        </ul>

        <p className="mt-6">
          Whether you are managing personal to-dos or team projects, TodoMate is here to simplify your life and boost your productivity. Start organizing your tasks today!
        </p>
      </div>
    </div>
  );
}