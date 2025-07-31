import  { useState } from "react";

export default function PaymentTracker({ client }) {
  const [data, setData] = useState(client);

  const togglePayment = (index) => {
    const updatedPayments = [...data.payments];
    updatedPayments[index] = !updatedPayments[index];

    const updatedData = { ...data, payments: updatedPayments };
    setData(updatedData);
    localStorage.setItem(`installmate_${data.clientName}`, JSON.stringify(updatedData));
  };

  if (!client) return null;

  return (
    <div className="bg-white shadow p-4 rounded-xl w-full max-w-md">
      <h2 className="text-lg font-semibold mb-4">Payment Tracker</h2>
      <p><strong>Client:</strong> {data.clientName}</p>
      <p><strong>Amount per Installment:</strong> ₦{data.amountPerInstallment.toFixed(2)}</p>
      <ul className="mt-4 space-y-2">
        {data.payments.map((paid, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-2 rounded border ${
              paid ? "bg-green-100" : "bg-red-100"
            }`}
          >
            <span>Installment {index + 1}</span>
            <button
              onClick={() => togglePayment(index)}
              className={`text-sm px-3 py-1 rounded ${
                paid ? "bg-red-500 text-white" : "bg-green-500 text-white"
              }`}
            >
              {paid ? "Undo" : "Mark Paid"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
