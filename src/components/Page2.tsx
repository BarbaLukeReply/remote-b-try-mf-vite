// Importazioni
import React, { useCallback } from "react";
import { Button } from "@barbalukereply/storybooktrycomponentlib";
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
interface ComponentProps {
  useAlerts?: () => UseAlertsType;
}

const Page2: React.FC<ComponentProps> = ({ useAlerts }) => {
  const { addAlert } = useAlerts?.() || {};
  

  const handleTryEvents = useCallback(() => {
    console.log("Button pressed & event sent!");
    const initialFormData: AlertType = {
      severity: "warning", message: "", timeout: 0,
      id: ""
    };
    window.dispatchEvent(new CustomEvent("TRY_EVENT", { detail: "ci sono!" }));
    addAlert?.({ ...initialFormData, message: "This is an alert message in Warning Type called from remote component but using context from the shell app" });
  }, [addAlert]);

  return (
    <div className="flex flex-col items-center justify-center flex-grow bg-green-500 bg-opacity-50 space-y-4 p-4">
      <h1>Remote Component B</h1>
      <Button
        text="Button from storybook remote lib in github"
        primary
        onClick={handleTryEvents}
      />
    </div>
  );
};

export default Page2;