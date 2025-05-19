function Dashboard({ clients, payments }) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-blue-600 p-4 text-white">
            <h2 className="text-2xl font-bold">Client Dashboard</h2>
            <p className="opacity-90">All active installment plans</p>
          </div>
  
          {clients.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No clients found. Create your first installment plan.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {clients.map((client) => {
                const clientPayments = payments.filter(p => p.clientId === client.id);
                const totalPaid = clientPayments.reduce((sum, p) => sum + p.amount, 0);
                const progress = Math.min(100, (totalPaid / client.totalAmount) * 100);
  
                return (
                  <div key={client.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg text-blue-600">{client.name}</h3>
                        <p className="text-gray-600">{client.product}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {client.paymentDay}
                      </span>
                    </div>
  
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">
                          ${totalPaid.toFixed(2)} / ${client.totalAmount.toFixed(2)}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
  
                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-gray-500">Started</p>
                        <p>{new Date(client.startDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Last Payment</p>
                        <p>
                          {clientPayments.length > 0 ? 
                            new Date(clientPayments[clientPayments.length - 1].date).toLocaleDateString() : 
                            'None'}
                        </p>
                      </div>
                    </div>
  
                    <div className="mt-4 pt-4 border-t">
                      <h4 className="font-medium text-gray-700 mb-2">Payment History</h4>
                      <div className="max-h-40 overflow-y-auto">
                        {clientPayments.length > 0 ? (
                          <table className="min-w-full divide-y divide-gray-200">
                            <tbody className="divide-y divide-gray-200">
                              {clientPayments.map((payment) => (
                                <tr key={payment.id}>
                                  <td className="px-1 py-2 whitespace-nowrap text-sm font-medium text-blue-600">
                                    ${payment.amount.toFixed(2)}
                                  </td>
                                  <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500">
                                    {new Date(payment.date).toLocaleDateString()}
                                  </td>
                                  <td className="px-1 py-2 whitespace-nowrap text-sm text-gray-500 truncate max-w-xs">
                                    {payment.note}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        ) : (
                          <p className="text-sm text-gray-500">No payments recorded</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default Dashboard;