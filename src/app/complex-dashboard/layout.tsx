import React from "react";

interface ComplexDashboardLayoutProps {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode;
}
const ComplexDashboardLayout = ({
  children,
  users,
  notifications,
  revenue,
  login,
}: ComplexDashboardLayoutProps) => {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <div className="m-3">
      <div> {children}</div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          {users}
          {revenue}
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
};

export default ComplexDashboardLayout;
