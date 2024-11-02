import { Database, Lock, ExternalLink } from 'lucide-react';
import React from 'react';
import type { Dataset } from '../types';

interface DatasetCardProps {
  dataset: Dataset;
  onRequestAccess: (id: string) => void;
}

export function DatasetCard({ dataset, onRequestAccess }: DatasetCardProps) {
  const sensitivityColor = {
    public: 'badge-green',
    internal: 'badge-purple',
    confidential: 'badge-yellow',
    restricted: 'badge-red',
  }[dataset.sensitivity];

  return (
    <div className="card p-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <Database className="h-6 w-6 text-purple-500" />
          <div className="ml-3">
            <div className="flex items-center">
              <h3 className="text-base font-semibold text-gray-200">{dataset.name}</h3>
              {dataset.status === 'restricted' && (
                <Lock className="h-4 w-4 ml-2 text-red-400" />
              )}
            </div>
            <p className="text-sm text-gray-400 mt-0.5">{dataset.description}</p>
          </div>
        </div>
        <ExternalLink className="h-4 w-4 text-gray-400 hover:text-gray-200 cursor-pointer" />
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        <span className={`badge ${sensitivityColor}`}>
          {dataset.sensitivity}
        </span>
        <span className="badge bg-[#2a3847] text-gray-200 border border-[#3a4857]">
          {dataset.type}
        </span>
        {dataset.compliance.map((comp) => (
          <span key={comp} className="badge badge-purple">
            {comp}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
        <span>Size: {dataset.size}</span>
        <span>Updated: {dataset.lastUpdated}</span>
      </div>

      <div className="mt-4">
        <button
          onClick={() => onRequestAccess(dataset.id)}
          disabled={dataset.status === 'restricted'}
          className={`w-full ${
            dataset.status === 'restricted'
              ? 'bg-[#2a3847] text-gray-400 cursor-not-allowed'
              : 'btn-primary'
          }`}
        >
          {dataset.status === 'restricted' ? 'Access Restricted' : 'Request Access'}
        </button>
      </div>
    </div>
  );
}