import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  ChevronRight,
  Database,
  Shield,
  Settings,
  Users
} from 'lucide-react';

export function IntegrationConfig() {
  const { provider } = useParams();
  const [step, setStep] = useState(1);

  return (
    <div>
      <div className="flex items-center text-sm text-gray-400 mb-8">
        <span>Integrations</span>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-white">Configure {provider}</span>
      </div>

      <div className="bg-[#1a2837] rounded-lg border border-[#2a3847] p-6">
        <div className="flex space-x-8 mb-8">
          <button
            className={`flex items-center space-x-2 pb-2 border-b-2 ${
              step === 1 
                ? 'border-purple-500 text-white' 
                : 'border-transparent text-gray-400'
            }`}
            onClick={() => setStep(1)}
          >
            <Database className="w-4 h-4" />
            <span>Connection</span>
          </button>
          <button
            className={`flex items-center space-x-2 pb-2 border-b-2 ${
              step === 2 
                ? 'border-purple-500 text-white' 
                : 'border-transparent text-gray-400'
            }`}
            onClick={() => setStep(2)}
          >
            <Shield className="w-4 h-4" />
            <span>Security</span>
          </button>
          <button
            className={`flex items-center space-x-2 pb-2 border-b-2 ${
              step === 3 
                ? 'border-purple-500 text-white' 
                : 'border-transparent text-gray-400'
            }`}
            onClick={() => setStep(3)}
          >
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Connection String
              </label>
              <input
                type="text"
                className="w-full bg-[#2a3847] border border-[#3a4857] rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your connection string"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                API Key
              </label>
              <input
                type="password"
                className="w-full bg-[#2a3847] border border-[#3a4857] rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your API key"
              />
            </div>
            <div className="pt-4">
              <button className="btn-primary">
                Test Connection
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Access Level
              </label>
              <select className="w-full bg-[#2a3847] border border-[#3a4857] rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Read Only</option>
                <option>Read/Write</option>
                <option>Admin</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                IP Whitelist
              </label>
              <input
                type="text"
                className="w-full bg-[#2a3847] border border-[#3a4857] rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter IP addresses (comma separated)"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Sync Frequency
              </label>
              <select className="w-full bg-[#2a3847] border border-[#3a4857] rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Real-time</option>
                <option>Every 15 minutes</option>
                <option>Hourly</option>
                <option>Daily</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Data Retention
              </label>
              <select className="w-full bg-[#2a3847] border border-[#3a4857] rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>30 days</option>
                <option>60 days</option>
                <option>90 days</option>
                <option>180 days</option>
                <option>1 year</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}