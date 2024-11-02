import React from 'react';
import { Shield } from 'lucide-react';

const datasets = [
  {
    name: 'Customer Data',
    compliance: ['GDPR', 'CCPA'],
    source: 'Snowflake',
    lastUpdated: '2024-03-15',
  },
  {
    name: 'Financial Records',
    compliance: ['SOX', 'PCI DSS'],
    source: 'MongoDB',
    lastUpdated: '2024-03-14',
  },
  {
    name: 'Healthcare Records',
    compliance: ['HIPAA', 'HITECH'],
    source: 'AWS S3',
    lastUpdated: '2024-03-13',
  },
];

function Compliance() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Compliance Overview</h1>
      
      {/* Filters */}
      <div className="mb-6 flex gap-4">
        <select className="select">
          <option>All Compliance</option>
          <option>GDPR</option>
          <option>HIPAA</option>
          <option>SOX</option>
        </select>
        <select className="select">
          <option>All Sources</option>
          <option>Snowflake</option>
          <option>MongoDB</option>
          <option>AWS S3</option>
        </select>
      </div>

      {/* Dataset List */}
      <div className="card">
        <div className="grid grid-cols-4 gap-4 p-6 font-semibold border-b border-[var(--border-color)]">
          <div>Dataset</div>
          <div>Compliance</div>
          <div>Source</div>
          <div>Last Updated</div>
        </div>
        {datasets.map((dataset) => (
          <div
            key={dataset.name}
            className="grid grid-cols-4 gap-4 p-6 border-b border-[var(--border-color)] hover:bg-[var(--bg-tertiary)] transition-colors"
          >
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-primary-500 mr-2" />
              {dataset.name}
            </div>
            <div>
              <div className="flex gap-2">
                {dataset.compliance.map((c) => (
                  <span
                    key={c}
                    className="badge badge-primary"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div>{dataset.source}</div>
            <div>{dataset.lastUpdated}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Compliance;