import { Database, Users, Shield, Clock } from 'lucide-react';
import React from 'react';

interface StatsCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down';
}

function StatsCard({ icon, label, value, change, trend }: StatsCardProps) {
  return (
    <div className="dd-card p-4">
      <div className="flex items-center">
        <div className="p-2 rounded-lg bg-dd-purple-50">{icon}</div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium text-dd-gray-600">{label}</p>
          <div className="flex items-baseline mt-1">
            <p className="text-xl font-semibold text-dd-gray-900">{value}</p>
            {change && (
              <p
                className={`ml-2 text-sm font-medium ${
                  trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {change}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        icon={<Database className="h-5 w-5 text-dd-purple-500" />}
        label="Total Datasets"
        value="247"
        change="+12%"
        trend="up"
      />
      <StatsCard
        icon={<Users className="h-5 w-5 text-dd-purple-500" />}
        label="Active Users"
        value="1,234"
        change="+7.4%"
        trend="up"
      />
      <StatsCard
        icon={<Shield className="h-5 w-5 text-dd-purple-500" />}
        label="Compliance Score"
        value="98%"
        change="+2.3%"
        trend="up"
      />
      <StatsCard
        icon={<Clock className="h-5 w-5 text-dd-purple-500" />}
        label="Avg. Access Time"
        value="1.2s"
        change="-14%"
        trend="down"
      />
    </div>
  );
}