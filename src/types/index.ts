export interface Dataset {
  id: string;
  name: string;
  description: string;
  type: 'structured' | 'unstructured' | 'semi-structured';
  sensitivity: 'public' | 'internal' | 'confidential' | 'restricted';
  size: string;
  lastUpdated: string;
  compliance: string[];
  status: 'available' | 'pending' | 'restricted';
}

export interface DataAccessRequest {
  id: string;
  datasetId: string;
  requestedBy: string;
  status: 'pending' | 'approved' | 'rejected';
  requestedAt: string;
  purpose: string;
}

export interface ActivityLog {
  id: string;
  type: 'access' | 'request' | 'compliance' | 'system';
  message: string;
  timestamp: string;
  severity: 'info' | 'warning' | 'error';
  user?: string;
}