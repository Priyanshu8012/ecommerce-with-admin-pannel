import React from "react";

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white h-screen flex flex-col">
      <h1 className="text-3xl font-bold p-6 border-b border-gray-700 text-center">
        Print-Place
      </h1>
      <nav className="flex flex-col p-4 space-y-2">
        <a
          href="#"
          className="py-3 px-4 rounded-lg text-sm font-medium hover:bg-gray-700 flex items-center space-x-2 transition-all duration-300"
        >
          <span className="material-icons">dashboard</span>
          <span>Dashboard</span>
        </a>
        <a
          href="#"
          className="py-3 px-4 rounded-lg text-sm font-medium hover:bg-gray-700 flex items-center space-x-2 transition-all duration-300"
        >
          <span className="material-icons">shopping_cart</span>
          <span>Products</span>
        </a>
        <a
          href="#"
          className="py-3 px-4 rounded-lg text-sm font-medium hover:bg-gray-700 flex items-center space-x-2 transition-all duration-300"
        >
          <span className="material-icons">receipt</span>
          <span>Orders</span>
        </a>
        <a
          href="#"
          className="py-3 px-4 rounded-lg text-sm font-medium hover:bg-gray-700 flex items-center space-x-2 transition-all duration-300"
        >
          <span className="material-icons">people</span>
          <span>Customers</span>
        </a>
        <a
          href="#"
          className="py-3 px-4 rounded-lg text-sm font-medium hover:bg-gray-700 flex items-center space-x-2 transition-all duration-300"
        >
          <span className="material-icons">bar_chart</span>
          <span>Reports</span>
        </a>
        <a
          href="#"
          className="py-3 px-4 rounded-lg text-sm font-medium hover:bg-gray-700 flex items-center space-x-2 transition-all duration-300"
        >
          <span className="material-icons">settings</span>
          <span>Settings</span>
        </a>
      </nav>
    </div>
  );
};

// MainContent Component
const MainContent = () => {
  return (
    <div className="flex-1 p-8 bg-gray-50">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 shadow-lg rounded-lg">
          <h3 className="text-sm font-semibold">Total Sales</h3>
          <p className="text-2xl font-bold mt-2">$12,300</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 shadow-lg rounded-lg">
          <h3 className="text-sm font-semibold">New Orders</h3>
          <p className="text-2xl font-bold mt-2">45</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white p-6 shadow-lg rounded-lg">
          <h3 className="text-sm font-semibold">Products in Stock</h3>
          <p className="text-2xl font-bold mt-2">320</p>
        </div>
        <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white p-6 shadow-lg rounded-lg">
          <h3 className="text-sm font-semibold">Active Customers</h3>
          <p className="text-2xl font-bold mt-2">1,200</p>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
        <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-600">
              <th className="border-b-2 p-4">Order ID</th>
              <th className="border-b-2 p-4">Customer</th>
              <th className="border-b-2 p-4">Amount</th>
              <th className="border-b-2 p-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="hover:bg-gray-100">
              <td className="p-4">ORD12345</td>
              <td className="p-4">John Doe</td>
              <td className="p-4">$150</td>
              <td className="p-4 text-green-600 font-semibold">Completed</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="p-4">ORD12346</td>
              <td className="p-4">Jane Smith</td>
              <td className="p-4">$200</td>
              <td className="p-4 text-yellow-600 font-semibold">Pending</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="p-4">ORD12347</td>
              <td className="p-4">Michael Lee</td>
              <td className="p-4">$75</td>
              <td className="p-4 text-red-600 font-semibold">Cancelled</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Inventory Overview */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Low Stock Products</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-600">
              <th className="border-b-2 p-4">Product Name</th>
              <th className="border-b-2 p-4">Category</th>
              <th className="border-b-2 p-4">Stock</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="hover:bg-gray-100">
              <td className="p-4">Post-Card</td>
              <td className="p-4">Flyer</td>
              <td className="p-4 text-red-600 font-semibold">2</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="p-4">Transfer</td>
              <td className="p-4">Discount Cards</td>
              <td className="p-4 text-yellow-600 font-semibold">5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Combined Layout Component
const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Dashboard;
