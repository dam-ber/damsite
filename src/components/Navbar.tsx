import { Menu, Bell, Settings, User } from 'lucide-react';
import React from 'react';

export function Navbar() {
  return (
    <nav className="bg-white border-b border-dd-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Menu className="h-5 w-5 text-dd-purple-500" />
              <span className="ml-3 text-lg font-semibold text-dd-gray-900">DataBroker</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4 items-center">
              <button className="dd-button-secondary">Datasets</button>
              <button className="dd-button-secondary">Compliance</button>
              <button className="dd-button-secondary">Analytics</button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-md hover:bg-dd-gray-50">
              <Bell className="h-5 w-5 text-dd-gray-600" />
            </button>
            <button className="p-2 rounded-md hover:bg-dd-gray-50">
              <Settings className="h-5 w-5 text-dd-gray-600" />
            </button>
            <div className="ml-2 flex items-center">
              <button className="flex items-center dd-button-secondary">
                <User className="h-4 w-4 mr-2" />
                <span>Account</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}