import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, AlertCircle, BarChart2, RefreshCw } from 'lucide-react';

const orders = [
  {
    id: "ORD-001",
    website: "techinsider.com",
    date: "2024-03-15",
    status: "completed",
    price: 299,
    title: "10 Emerging Tech Trends in 2024"
  },
  {
    id: "ORD-002",
    website: "businessdaily.net",
    date: "2024-03-14",
    status: "in-progress",
    price: 249,
    title: "The Future of Remote Work"
  },
  {
    id: "ORD-003",
    website: "healthplus.org",
    date: "2024-03-13",
    status: "pending",
    price: 199,
    title: "Natural Ways to Boost Immunity"
  }
];

const statusColors = {
  pending: 'bg-yellow-500',
  'in-progress': 'bg-blue-500',
  completed: 'bg-green-500',
  rejected: 'bg-red-500'
};

const statusIcons = {
  pending: <Clock className="h-5 w-5" />,
  'in-progress': <RefreshCw className="h-5 w-5" />,
  completed: <CheckCircle className="h-5 w-5" />,
  rejected: <AlertCircle className="h-5 w-5" />
};

const MyOrders = () => {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">My Orders</h1>
          <p className="text-gray-300">Track and manage your guest post orders</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Orders', value: orders.length, icon: <BarChart2 className="h-6 w-6 text-purple-400" /> },
            { label: 'Completed', value: orders.filter(o => o.status === 'completed').length, icon: <CheckCircle className="h-6 w-6 text-green-400" /> },
            { label: 'In Progress', value: orders.filter(o => o.status === 'in-progress').length, icon: <RefreshCw className="h-6 w-6 text-blue-400" /> },
            { label: 'Pending', value: orders.filter(o => o.status === 'pending').length, icon: <Clock className="h-6 w-6 text-yellow-400" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
                {stat.icon}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Order ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Title</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Website</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <motion.tr
                    key={order.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-white/10 hover:bg-white/5"
                  >
                    <td className="px-6 py-4 text-white">{order.id}</td>
                    <td className="px-6 py-4 text-white">{order.title}</td>
                    <td className="px-6 py-4 text-white">{order.website}</td>
                    <td className="px-6 py-4 text-white">{order.date}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                        {statusIcons[order.status]}
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-white">${order.price}</td>
                    <td className="px-6 py-4">
                      <button className="text-pink-500 hover:text-pink-400 font-medium">
                        View Details
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
