export default function Dashboard({ clients, onSelectClient }) {
   const clientsWithPayments = clients.map(client => ({
    ...client,
    totalPaid: payments.filter(p => p.clientId === client.id)
                      .reduce((sum, p) => sum + p.amount, 0)
  }));

  return (
     <div>
      {clientsWithPayments.map(client => (
        <div 
          key={client.id} 
          onClick={() => onSelectClient(client)}
          className="client-card"
        >
        <div className="space-y-6">
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-bold text-gray-800">Client Dashboard</h2>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {clients.length} {clients.length === 1 ? 'Client' : 'Clients'}
          </span>
        </div>

        {clients.length === 0 ? (
          <div className="text-center py-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="mt-2 text-gray-600">No clients found</p>
            <p className="text-sm text-gray-500">Create your first installment plan</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clients.map((client) => {
              const totalPaid = client.payments?.reduce((sum, p) => sum + p.amount, 0) || 0;
              const progress = Math.min(100, (totalPaid / client.totalAmount) * 100);

              return (
                <div
                  key={client.id}
                  onClick={() => onSelectClient(client)}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-800">{client.name}</h3>
                      <p className="text-gray-600">{client.product}</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {client.paymentDay.charAt(0).toUpperCase() + client.paymentDay.slice(1)}
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Paid: ${totalPaid.toFixed(2)}</span>
                      <span className="font-medium">Total: ${client.totalAmount.toFixed(2)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mt-3 flex justify-between text-sm text-gray-500">
                    <span>Started: {new Date(client.startDate).toLocaleDateString()}</span>
                    <span>
                      {client.payments?.length || 0} {client.payments?.length === 1 ? 'payment' : 'payments'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
        </div>
      ))}
    </div>
  );
}