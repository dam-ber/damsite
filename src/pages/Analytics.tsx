import React from 'react';
import { Users, Database, Bot } from 'lucide-react';

const userActivities = [
  {
    user: 'John Doe',
    dataset: 'Customer Data',
    llm: 'GPT-4',
    accessTime: '2024-03-15 14:30',
    status: 'Active',
  },
  {
    user: 'Jane Smith',
    dataset: 'Financial Records',
    llm: 'Claude',
    accessTime: '2024-03-15 13:45',
    status: 'Completed',
  },
  {
    user: 'Mike Johnson',
    dataset: 'Healthcare Records',
    llm: 'PaLM',
    accessTime: '2024-03-15 12:15',
    status: 'Active',
  },
];

function Analytics() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Analytics</h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="metric-card">
          <div className="flex items-center mb-2">
            <Users className="w-5 h-5 text-primary-500 mr-2" />
            <h2 className="text-lg font-semibold">Active Users</h2>
          </div>
          <p className="text-3xl font-bold text-primary-500">24</p>
        </div>
        <div className="metric-card">
          <div className="flex items-center mb-2">
            <Database className="w-5 h-5 text-primary-500 mr-2" />
            <h2 className="text-lg font-semibold">Datasets Accessed</h2>
          </div>
          <p className="text-3xl font-bold text-primary-500">89</p>
        </div>
        <div className="metric-card">
          <div className="flex items-center mb-2">
            <Bot className="w-5 h-5 text-primary-500 mr-2" />
            <h2 className="text-lg font-semibold">LLM Queries</h2>
          </div>
          <p className="text-3xl font-bold text-primary-500">1,456</p>
        </div>
      </div>

      {/* Activity Table */}
      <div className="card">
        <div className="p-6 border-b border-[var(--border-color)]">
          <h2 className="text-lg font-semibold">Recent Activities</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--bg-tertiary)]">
                <th className="px-6 py-4 text-left text-sm font-medium text-[var(--text-secondary)]">User</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[var(--text-secondary)]">Dataset</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[var(--text-secondary)]">LLM</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[var(--text-secondary)]">Access Time</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[var(--text-secondary)]">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {userActivities.map((activity, index) => (
                <tr key={index} className="hover:bg-[var(--bg-tertiary)] transition-colors">
                  <td className="px-6 py-4">{activity.user}</td>
                  <td className="px-6 py-4">{activity.dataset}</td>
                  <td className="px-6 py-4">{activity.llm}</td>
                  <td className="px-6 py-4">{activity.accessTime}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`badge ${
                        activity.status === 'Active'
                          ? 'badge-success'
                          : 'badge-primary'
                      }`}
                    >
                      {activity.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Analytics;