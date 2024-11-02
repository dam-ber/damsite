import { Activity, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import React from 'react';
import type { ActivityLog } from '../types';

interface ActivityFeedProps {
  activities: ActivityLog[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  const getActivityIcon = (severity: ActivityLog['severity']) => {
    switch (severity) {
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      default:
        return <Info className="h-4 w-4 text-dd-purple-500" />;
    }
  };

  return (
    <div className="dd-card p-4">
      <div className="flex items-center mb-4">
        <Activity className="h-5 w-5 text-dd-purple-500" />
        <h2 className="ml-2 text-base font-semibold text-dd-gray-900">Recent Activity</h2>
      </div>
      <div className="space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start space-x-3 p-3 rounded-md bg-dd-gray-50 hover:bg-dd-gray-100 transition-colors duration-200"
          >
            {getActivityIcon(activity.severity)}
            <div className="flex-1 min-w-0">
              <p className="text-sm text-dd-gray-900">{activity.message}</p>
              <div className="mt-1 flex items-center space-x-2 text-xs text-dd-gray-600">
                <span>{new Date(activity.timestamp).toLocaleString()}</span>
                {activity.user && (
                  <>
                    <span>•</span>
                    <span className="font-medium">{activity.user}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}