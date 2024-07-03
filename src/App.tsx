import React from 'react';
import './App.css';
import Page2 from './components/Page2';

interface AlertType {
  id: string;
  message: string;
  severity: "info" | "warning" | "error" | "success";
  timeout?: number;
}

interface UseAlertsType {
  addAlert: (alert: Omit<AlertType, 'id'>) => void;
  clearAlerts: () => void;
}

interface AppProps {
  useAlerts?: () => UseAlertsType;
}

const App: React.FC<AppProps> = ({ useAlerts }) => {
  return <Page2 useAlerts={useAlerts} />;
};

export default App;