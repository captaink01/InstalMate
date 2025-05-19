
import { useNavigate } from 'react-router-dom';

const AppSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Choose an App</h1>
        <p className="text-gray-500">Select which part of the app you would like to open.</p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate('/TodoApp')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all"
          >
            Open Todo App
          </button>
          <button
            onClick={() => navigate('/InstallMate')}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all"
          >
            Open Installment Calculator
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppSelector;
