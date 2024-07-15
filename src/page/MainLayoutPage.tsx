import { Header } from "../components/Header";
import { List } from "../components/List";
import { LoadingPage } from "./LoadingPage";

export const MainLayoutPage: React.FC = () => {
  if (false) {
    return <LoadingPage />;
  }

  if (false) {
    return (
      <div className="flex h-screen items-center justify-center text-slate-900">
        Something went wrong
      </div>
    );
  }

  return (
    <div>
      <Header />
      <List />
    </div>
  );
};
