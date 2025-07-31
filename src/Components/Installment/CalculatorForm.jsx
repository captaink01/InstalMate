import { useState } from "react";

export default function CalculatorForm({ onCalculate }) {
  const [clientName, setClientName] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [installments, setInstallments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!clientName || !totalAmount || !installments) return;

    const amountPerInstallment = parseFloat(totalAmount) / parseInt(installments);

    const clientData = {
      clientName,
      totalAmount: parseFloat(totalAmount),
      installments: parseInt(installments),
      amountPerInstallment,
      payments: Array(parseInt(installments)).fill(false), // initialize all as unpaid
    };

    // Save to localStorage
    localStorage.setItem(`installmate_${clientName}`, JSON.stringify(clientData));

    onCalculate(clientData);
    setClientName("");
    setTotalAmount("");
    setInstallments("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow p-4 rounded-xl w-full max-w-md mb-6"
    >
      <h2 className="text-lg font-semibold mb-4">Installment Calculator</h2>
      <input
        type="text"
        placeholder="Client Name"
        className="w-full border p-2 mb-2 rounded"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Total Amount"
        className="w-full border p-2 mb-2 rounded"
        value={totalAmount}
        onChange={(e) => setTotalAmount(e.target.value)}
      />
      <input
        type="number"
        placeholder="Number of Installments"
        className="w-full border p-2 mb-4 rounded"
        value={installments}
        onChange={(e) => setInstallments(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
      >
        Calculate
      </button>
    </form>
  );
}
