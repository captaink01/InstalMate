import  { useState } from "react";
import CalculatorForm from "./CalculatorForm";
import PaymentTracker from "./PaymentTracker";

export default function InstallMate() {
  const [clientData, setClientData] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">InstallMate</h1>
      <CalculatorForm onCalculate={setClientData} />
      {clientData && <PaymentTracker client={clientData} />}
    </div>
  );
}
