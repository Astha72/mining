import React from "react";

const transactions = [
  { name: "Manish", id: "#528648", type: "Money Withdraw", upi: "Active", date: "15 Jun, 1:50 PM", amount: "-$2,500" },
  { name: "Suresh Kumar", id: "#8696574", type: "Amount Added", upi: "Active", date: "15 Jun, 1:40 PM", amount: "+$200" },
  { name: "Anjali Verma", id: "#8585967", type: "Amount Added", upi: "Active", date: "15 Jun, 1:26 PM", amount: "+$350" },
  { name: "Vishnu Soni", id: "#365894", type: "Amount Added", upi: "Active", date: "15 Jun, 1:21 PM", amount: "+$700" },
  { name: "Emilly", id: "#5286954", type: "Transfer", upi: "Active", date: "14 Jan, 10:40 PM", amount: "-$340" },
];

export default function Earn() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="bg-gray-100 md:w-1/5 p-4 space-y-4">
        <h1 className="text-xl font-bold text-blue-700">🏦 BankDash</h1>
        {["Dashboard", "Transactions", "Accounts", "Investments", "Credit Cards", "Loans", "Services", "My Privileges", "Setting"].map(item => (
          <button
            key={item}
            className={`block text-left px-4 py-2 rounded-lg w-full ${
              item === "Transactions" ? "bg-blue-600 text-white" : "hover:bg-gray-200"
            }`}
          >
            {item}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 space-y-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h2 className="text-2xl font-semibold">Transactions</h2>
          <div className="flex gap-2 items-center">
            <input type="text" placeholder="Search..." className="border rounded px-3 py-1" />
            <img src="https://i.pravatar.cc/40" alt="avatar" className="w-10 h-10 rounded-full" />
          </div>
        </div>

        {/* Account Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-700 text-white p-4 rounded-xl">
            <h3>Limit of Token Payment</h3>
            <p className="text-xl font-bold">$1,000</p>
            <p className="mt-4">CARD HOLDER: User</p>
            <p>VALID THRU: 12/22</p>
            <p className="mt-2">5552914907</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl">
            <h3>Previous Cards Transaction</h3>
            <p className="text-xl font-bold">$5,756</p>
            <p className="mt-4">CARD HOLDER: Users</p>
            <p>Accounts: 10+</p>
            <p className="mt-2">**** **** **** 1234</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl flex flex-col justify-between">
            <h3 className="text-lg font-semibold">My Expense</h3>
            <div className="mt-4">
              <div className="h-24 w-full bg-gradient-to-r from-gray-300 to-green-300 rounded-lg flex items-end justify-center text-green-600 font-bold text-xl">
                $12,500
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-4 text-sm md:text-base">
          <button className="font-semibold text-blue-700 border-b-2 border-blue-700">All Transactions</button>
          <button className="text-gray-500 hover:text-blue-700">Income</button>
          <button className="text-gray-500 hover:text-blue-700">Expense</button>
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white text-left rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="py-2 px-4">Description</th>
                <th className="py-2 px-4">Transaction ID</th>
                <th className="py-2 px-4">Type</th>
                <th className="py-2 px-4">UPI</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Receipt</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, idx) => (
                <tr key={idx} className="border-t text-sm md:text-base">
                  <td className="py-2 px-4">{txn.name}</td>
                  <td className="py-2 px-4">{txn.id}</td>
                  <td className="py-2 px-4">{txn.type}</td>
                  <td className="py-2 px-4">{txn.upi}</td>
                  <td className="py-2 px-4">{txn.date}</td>
                  <td className={`py-2 px-4 font-bold ${txn.amount.startsWith("-") ? "text-red-500" : "text-green-600"}`}>
                    {txn.amount}
                  </td>
                  <td className="py-2 px-4">
                    <button className="text-blue-600 underline">Download</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end gap-2 items-center mt-4 text-sm">
          <button className="text-blue-500">‹ Previous</button>
          <button className="bg-blue-600 text-white px-3 py-1 rounded">1</button>
          <button className="text-blue-500">2</button>
          <button className="text-blue-500">3</button>
          <button className="text-blue-500">Next ›</button>
        </div>
      </main>
    </div>
  );
}
