import React from 'react';
import { Database, Cloud, Server, Globe, Box, Cpu } from 'lucide-react';

const integrations = [
  {
    name: 'Snowflake',
    description: 'Connect to your Snowflake data warehouse',
    icon: Database,
    category: 'Data Warehouse',
    status: 'Connected',
    datasets: 156,
  },
  {
    name: 'MongoDB Atlas',
    description: 'Access MongoDB collections and databases',
    icon: Server,
    category: 'Database',
    status: 'Connected',
    datasets: 89,
  },
  {
    name: 'AWS S3',
    description: 'Connect to AWS S3 buckets and data lakes',
    icon: Cloud,
    category: 'Cloud Storage',
    status: 'Connected',
    datasets: 234,
  },
  {
    name: 'Google BigQuery',
    description: 'Access and analyze big data with BigQuery',
    icon: Box,
    category: 'Data Warehouse',
    status: 'Available',
    datasets: 0,
  },
  {
    name: 'Azure Synapse',
    description: 'Enterprise analytics service with limitless scale',
    icon: Globe,
    category: 'Analytics',
    status: 'Available',
    datasets: 0,
  },
  {
    name: 'Databricks',
    description: 'Unified analytics platform for large-scale data processing',
    icon: Cpu,
    category: 'Data Processing',
    status: 'Available',
    datasets: 0,
  },
];

function Integrations() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Data Integrations</h1>
        <button className="btn-primary">Add Integration</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((integration) => {
          const Icon = integration.icon;
          return (
            <div
              key={integration.name}
              className="card p-6 hover:border-primary-500/50 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-xl bg-primary-500/10">
                  <Icon className="w-6 h-6 text-primary-500" />
                </div>
                <div className="ml-3">
                  <h2 className="text-lg font-semibold">
                    {integration.name}
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)]">{integration.category}</p>
                </div>
              </div>
              <p className="text-[var(--text-secondary)] text-sm mb-4">{integration.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--text-secondary)]">
                  {integration.datasets} datasets
                </span>
                <span
                  className={`badge ${
                    integration.status === 'Connected'
                      ? 'badge-success'
                      : 'badge-primary'
                  }`}
                >
                  {integration.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Integrations;