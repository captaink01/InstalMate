// src/components/Installment/InstallmentApp.js
import { useState, useEffect } from 'react';
import CalculatorForm from './CalculatorForm';
import PaymentTracker from '../../PaymentTracker';
import Dashboard from '../../Dashboard';

// Initialize localStorage schema for installments
const initInstallmentStorage = () => {
  if (!localStorage.getItem('installments-data')) {
    localStorage.setItem('installments-data', JSON.stringify({
      clients: [],
      payments: []
    }));
  }
};

export default function InstallmentApp() {
  const [clients, setClients] = useState([]);
  const [payments, setPayments] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  // Initialize data on first load
  useEffect(() => {
    initInstallmentStorage();
    const savedData = JSON.parse(localStorage.getItem('installments-data'));
    setClients(savedData.clients);
    setPayments(savedData.payments);
  }, []);

  // Save data whenever it changes
  useEffect(() => {
    localStorage.setItem('installments-data', JSON.stringify({ clients, payments }));
  }, [clients, payments]);

  const addClient = (newClient) => {
    const client = { ...newClient, id: Date.now().toString() };
    setClients([...clients, client]);
    setSelectedClient(client);
  };

  const addPayment = (clientId, amount, date, note = '') => {
    setPayments([
      ...payments,
      {
        id: Date.now().toString(),
        clientId,
        amount: parseFloat(amount),
        date,
        note
      }
    ]);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto p-4">
      {!selectedClient ? (
        <>
          <CalculatorForm onAddClient={addClient} />
          <Dashboard 
            clients={clients} 
            payments={payments} 
            onSelectClient={setSelectedClient} 
          />
        </>
      ) : (
        <PaymentTracker
          client={selectedClient}
          payments={payments.filter(p => p.clientId === selectedClient.id)}
          onAddPayment={addPayment}
          onBack={() => setSelectedClient(null)}
        />
      )}
    </div>
  );
}