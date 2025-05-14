import React from "react";

const Table = ({ history }) => {
  return (
    <div className="container mx-auto px-6 py-16 bg-gray-900">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Transaction History</h2>
        <p className="text-gray-400">View your recent token swaps and transactions on the blockchain</p>
      </div>
      
      <div className="overflow-hidden shadow-lg rounded-2xl border border-gray-800">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-4 text-left font-medium text-gray-400 uppercase tracking-wider">ID</th>
                <th className="px-6 py-4 text-left font-medium text-gray-400 uppercase tracking-wider">User</th>
                <th className="px-6 py-4 text-left font-medium text-gray-400 uppercase tracking-wider">From</th>
                <th className="px-6 py-4 text-left font-medium text-gray-400 uppercase tracking-wider">To</th>
                <th className="px-6 py-4 text-right font-medium text-gray-400 uppercase tracking-wider">Input</th>
                <th className="px-6 py-4 text-right font-medium text-gray-400 uppercase tracking-wider">Output</th>
                <th className="px-6 py-4 text-center font-medium text-gray-400 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 bg-gray-900">
              {history.map((history, i) => (
                <tr key={i + 1} className="hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    #{history.historyId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <div className="flex items-center">
                      <div className="w-7 h-7 rounded-full bg-emerald-900 flex items-center justify-center mr-2">
                        <span className="text-xs text-emerald-400 font-bold">{history.userAddress.slice(0, 1)}</span>
                      </div>
                      <span>{history.userAddress.slice(0, 6)}...{history.userAddress.slice(-4)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium">
                    {history.tokenB}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium">
                    {history.tokenA}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium text-right">
                    {history.inputValue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-medium text-right">
                    {history.outputValue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-emerald-100 text-emerald-800">
                      Completed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {history.length > 0 && (
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center space-x-2">
            <a href="#" className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white">
              Previous
            </a>
            <a href="#" className="px-3 py-1 rounded-md bg-emerald-600 text-white">
              1
            </a>
            <a href="#" className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white">
              2
            </a>
            <a href="#" className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white">
              3
            </a>
            <a href="#" className="px-3 py-1 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white">
              Next
            </a>
          </nav>
        </div>
      )}
      
      {history.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-16 w-16 text-gray-600 mb-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
          <h3 className="text-xl font-medium text-gray-300 mb-2">No transactions yet</h3>
          <p className="text-gray-500 max-w-md">
            Start swapping tokens to see your transaction history appear here.
          </p>
          <button className="mt-6 px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors">
            Make Your First Swap
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;