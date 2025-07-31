// Initial data structure (run once to initialize localStorage)
export const initInstallmentData = () => {
    if (!localStorage.getItem('installments-clients')) {
      localStorage.setItem('installments-clients', JSON.stringify({
        clients: [],
        payments: []
      }));
    }
  };
  
  // Sample data (optional)
  export const sampleData = {
    clients: [
      {
        id: "1",
        name: "John Doe",
        product: "iPhone 15",
        totalAmount: 1000,
        startDate: "2024-05-01",
        paymentDay: "friday"
      }
    ],
    payments: [
      {
        id: "1",
        clientId: "1",
        amount: 200,
        date: "2024-05-10",
        note: "First payment"
      }
    ]
  };