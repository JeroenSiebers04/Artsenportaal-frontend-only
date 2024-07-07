import React from "react";
import "./componentstyles/dashboardsettings.css";
import SettingSwitch from "./switchsetting";

const DashboardSettings: React.FC = () => {

  return (
    <div className="settings-containers-background">
      <div className="settings-container">
        <div className="settings-element">
          <h3>Dark Theme</h3>
          <SettingSwitch status={false} />
        </div>
      </div>
    </div>
  );
}

export default DashboardSettings;