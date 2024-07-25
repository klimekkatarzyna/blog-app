import React from "react";
import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { MainLayout } from "../MainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("MainLayout page", () => {
  it("should render page correctly", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MainLayout />
      </QueryClientProvider>
    );
  });
});
