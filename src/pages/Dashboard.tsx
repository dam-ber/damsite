import React from 'react';
import { Database, Users, Shield, Clock, Activity, ArrowUp, ArrowDown } from 'lucide-react';

const stats = [
  {
    label: 'Active Integrations',
    value: '24',
    change: '+15%',
    trend: 'up',
    icon: Database,
  },
  {
    label: 'Data Sets',
    value: '312',
    change: '+8%',
    trend: 'up',
    icon: Shield,
  },
  {
    label: 'Active Users',
    value: '1,483',
    change: '+12%',
    trend: 'up',
    icon: Users,
  },
  {
    label: 'Avg Response Time',
    value: '234ms',
    change: '-18%',
    trend: 'down',
    icon: Clock,
  },
];

const recentActivity = [
  {
    id: 1,
    user: 'Sarah Chen',
    action: 'Accessed Customer Dataset',
    timestamp: '2 minutes ago',
    type: 'access',
  },
  {
    id: 2,
    user: 'Alex Thompson',
    action: 'Updated Snowflake Integration',
    timestamp: '15 minutes ago',
    type: 'integration',
  },
  {
    id: 3,
    user: 'Maria Garcia',
    action: 'Requested Financial Data Access',
    timestamp: '1 hour ago',
    type: 'request',
  },
  {
    id: 4,
    user: 'James Wilson',
    action: 'Modified GDPR Compliance Settings',
    timestamp: '2 hours ago',
    type: 'compliance',
  },
];

function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="btn-primary">Generate Report</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="metric-card">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[var(--text-secondary)]">{stat.label}</p>
                  <p className="mt-1 text-2xl font-semibold">{stat.value}</p>
                </div>
                <Icon className="w-5 h-5 text-primary-500" />
              </div>
              <div className="mt-2 flex items-center text-sm">
                {stat.trend === 'up' ? (
                  <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
                ) : (
                  <ArrowDown className="w-4 h-4 text-red-500 mr-1" />
                )}
                <span
                  className={stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}
                >
                  {stat.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="card">
          <div className="flex items-center justify-between p-6 border-b border-[var(--border-color)]">
            <div className="flex items-center">
              <Activity className="w-5 h-5 text-primary-500 mr-2" />
              <h2 className="text-lg font-semibold">Recent Activity</h2>
            </div>
            <button className="text-sm text-primary-500 hover:text-primary-400">
              View All
            </button>
          </div>
          <div className="p-6 space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between p-4 rounded-xl bg-[var(--bg-tertiary)] hover:bg-[var(--bg-tertiary)] transition-colors"
              >
                <div>
                  <p className="font-medium">
                    {activity.action}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {activity.user} • {activity.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Datasets */}
        <div className="card">
          <div className="flex items-center justify-between p-6 border-b border-[var(--border-color)]">
            <div className="flex items-center">
              <Database className="w-5 h-5 text-primary-500 mr-2" />
              <h2 className="text-lg font-semibold">Popular Datasets</h2>
            </div>
            <button className="text-sm text-primary-500 hover:text-primary-400">
              View All
            </button>
          </div>
          <div className="p-6 space-y-4">
            {[
              {
                name: 'Customer Analytics',
                users: '234',
                type: 'Snowflake',
                status: 'Active',
              },
              {
                name: 'Sales Pipeline',
                users: '189',
                type: 'MongoDB',
                status: 'Active',
              },
              {
                name: 'Product Metrics',
                users: '156',
                type: 'BigQuery',
                status: 'Active',
              },
              {
                name: 'User Behavior',
                users: '142',
                type: 'Redshift',
                status: 'Active',
              },
            ].map((dataset, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-xl bg-[var(--bg-tertiary)] hover:bg-[var(--bg-tertiary)] transition-colors"
              >
                <div className="flex items-center">
                  <div>
                    <p className="font-medium">
                      {dataset.name}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">{dataset.type}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-[var(--text-secondary)] mr-3">
                    {dataset.users} users
                  </span>
                  <span className="badge badge-success">
                    {dataset.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;