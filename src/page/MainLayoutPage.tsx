import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Outlet } from "react-router-dom";

export const MainLayoutPage: React.FC = () => {
  return (
    <div className="relative">
      <Header />
      <Outlet />
      <Button />
    </div>
  );
};
