import React, { ReactElement } from "react";
import { RenderOptions, render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter, MemoryRouterProps } from "react-router-dom";

type AllTheProvidersProps = {
  children: React.ReactNode;
  routerProps?: MemoryRouterProps;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const AllTheProviders = ({ children, routerProps }: AllTheProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter {...routerProps}>{children}</MemoryRouter>
    </QueryClientProvider>
  );
};

export const customRender = ({
  ui,
  routerProps,
}: {
  ui: ReactElement;
  options?: Omit<RenderOptions, "queries">;
  routerProps?: MemoryRouterProps;
}) => {
  return render(ui, {
    wrapper: ({ children }) => (
      <AllTheProviders routerProps={routerProps}>{children}</AllTheProviders>
    ),
  });
};

// re-export everything
export * from "@testing-library/react";

export { customRender as render };
