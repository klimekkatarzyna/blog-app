import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Header } from "../Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Select } from "../Select";
import { server } from "../../test/mocks/server";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("Header component", () => {
  it("should render button correctly", () => {
    vi.mock("react-router-dom", async (importOriginal) => {
      const mod = await importOriginal<typeof import("react-router-dom")>();
      return {
        ...mod,
        useParams: () => ({ postId: "2" }),
      };
    });

    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </QueryClientProvider>
    );

    const button = screen.getByTestId("back-button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/");

    fireEvent.click(button);
    expect(window.location.href).toContain("/");
  });

  it("displays autors from backend", async () => {
    vi.mock("react-router-dom", async (importOriginal) => {
      const mod = await importOriginal<typeof import("react-router-dom")>();
      return {
        ...mod,
        useParams: () => ({ userId: "1" }),
      };
    });

    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </QueryClientProvider>
    );

    // expect(await screen.findByText(/Post 1 title/i)).toBeInTheDocument();
    await waitFor(
      () => {
        expect(screen.getByTestId("posts-list")).toBeInTheDocument();
      }
      // const button = screen.getByTestId("autors-select");
      // expect(button).toBeInTheDocument();
      // expect(screen.getByTestId("autors-select")).toBeInTheDocument();
    );
  });

  //   await waitFor(() =>
  //     expect(screen.getByTestId("select")).toBeInTheDocument()
  //   );

  //   expect(await screen.findByText(/Jack/i)).toBeInTheDocument();
  // });
});
