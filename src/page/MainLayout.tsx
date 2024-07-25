import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Outlet } from "react-router-dom";
import React, { FC } from "react";

export const MainLayout: FC = () => {
  return (
    <div className="relative">
      <Header />
      <Outlet />
      <Button />
    </div>
  );
};
