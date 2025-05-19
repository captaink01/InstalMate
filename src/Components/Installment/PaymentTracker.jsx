import { useState } from 'react';

function PaymentTracker({ client, payments, onAddPayment, onBack }) {
  

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6 border border-gray-100">
      {/* Header */}
      <div className="bg-blue-600 p-4 text-white">
        <h3 className="text-xl font-bold">{client.name}</h3>
        <p className="opacity-90">{client.product}</p>
      </div>

      {/* Progress */}
      <div className="p-4 border-b">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-blue-600">Payment Progress</span>
          <span className="text-sm font-medium text-gray-700">
            ${totalPaid.toFixed(2)} of ${client.totalAmount.toFixed(2)}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Payment Form */}
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount ($)</label>
            <input
              type="number"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="50.00"
              step="0.01"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              type="date"
              value={paymentDate}
              onChange={(e) => setPaymentDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Note (Optional)</label>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Payment reference"
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm">
            <span className="font-medium text-gray-700">Remaining: </span>
            <span className="font-bold text-blue-600">${remaining.toFixed(2)}</span>
          </div>
          <button
            onClick={handlePayment}
            disabled={!paymentAmount}
            className={`px-4 py-2 rounded-lg font-medium ${paymentAmount ? 
              'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition' : 
              'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
          >
            Record Payment
          </button>
        </div>
      </div>

      {/* Recent Payments */}
      {client.payments?.length > 0 && (
        <div className="border-t p-4 bg-gray-50">
          <h4 className="font-medium text-gray-700 mb-2">Recent Payments</h4>
          <div className="space-y-2">
            {client.payments.slice(0, 3).map((payment) => (
              <div key={payment.id} className="flex justify-between py-2 border-b border-gray-100">
                <div>
                  <span className="text-blue-600 font-medium">${payment.amount.toFixed(2)}</span>
                  <span className="text-gray-500 text-sm ml-2">{payment.date}</span>
                </div>
                {payment.note && <span className="text-gray-500 text-sm truncate">{payment.note}</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentTracker;