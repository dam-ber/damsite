import React, { useState } from 'react';
import { Search, MessageSquare, Clock, Database } from 'lucide-react';

function Home() {
  const [query, setQuery] = useState('');

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Data Access Manager
        </h1>
        <p className="text-[var(--text-secondary)] text-lg">
          Discover, request, and manage access to data sets through natural language
        </p>
      </div>

      <div className="card p-6 mb-8">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Describe the data you're looking for..."
              className="input w-full"
            />
          </div>
          <button className="btn-primary px-6 py-3">
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="card p-6">
          <Search className="w-8 h-8 text-primary-500 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Natural Language Search</h2>
          <p className="text-[var(--text-secondary)]">
            Find relevant datasets using plain English descriptions of your needs
          </p>
        </div>
        <div className="card p-6">
          <Clock className="w-8 h-8 text-primary-500 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Time-Limited Access</h2>
          <p className="text-[var(--text-secondary)]">
            Request temporary access to datasets for specific projects
          </p>
        </div>
        <div className="card p-6">
          <MessageSquare className="w-8 h-8 text-primary-500 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Request New Datasets</h2>
          <p className="text-[var(--text-secondary)]">
            Can't find what you need? Submit a request for new data
          </p>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-4">Popular Datasets</h2>
        <div className="space-y-4">
          {[
            {
              name: 'Customer Analytics',
              description: 'Real-time customer behavior and engagement metrics',
              access: 'Immediate',
              type: 'Business Intelligence',
            },
            {
              name: 'Sales Pipeline',
              description: 'Current and historical sales data and forecasts',
              access: 'Request Required',
              type: 'Financial',
            },
            {
              name: 'Product Usage Metrics',
              description: 'Product adoption and usage statistics',
              access: 'Immediate',
              type: 'Product Analytics',
            },
          ].map((dataset, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--bg-tertiary)] transition-colors"
            >
              <div className="flex items-center space-x-4">
                <Database className="w-6 h-6 text-primary-500" />
                <div>
                  <h3 className="font-medium">{dataset.name}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{dataset.description}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm text-[var(--text-secondary)]">{dataset.type}</span>
                <div className="mt-1">
                  <span className={`badge ${
                    dataset.access === 'Immediate'
                      ? 'badge-success'
                      : 'badge-warning'
                  }`}>
                    {dataset.access}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;