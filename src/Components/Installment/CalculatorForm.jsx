import { useState } from 'react';



function CalculatorForm({ onAddClient }) {
  const [name, setName] = useState('');
  const [product, setProduct] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [paymentDay, setPaymentDay] = useState('monday');



  const handleSubmit = (e) => {
    e.preventDefault();
    onAddClient({ 
      name, 
      product, 
      totalAmount: parseFloat(totalAmount),
      paymentDay,
      startDate: new Date().toISOString().split('T')[0] 
    });
    // Reset form
    setName('');
    setProduct('');
    setTotalAmount('');
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
      <div className="bg-blue-600 p-4 text-white">
        <h2 className="text-2xl font-bold">New Installment Plan</h2>
        <p className="opacity-90">Add client and product details</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Client Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Product</label>
          <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="iPhone 15 Pro"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Total Amount ($)</label>
          <input
            type="number"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="1000"
            min="1"
            step="0.01"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Payment Day</label>
          <select
            value={paymentDay}
            onChange={(e) => setPaymentDay(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
              <option key={day} value={day}>
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105"
        >
          Create Installment Plan
        </button>
      </form>
    </div>
  );
}

export default CalculatorForm;