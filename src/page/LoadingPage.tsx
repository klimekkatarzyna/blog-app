import { Spinner } from "../components/Spinner";

export const LoadingPage: React.FC = () => (
  <div
    className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-transparent"
    data-testid="loading-page"
  >
    <Spinner />
  </div>
);
