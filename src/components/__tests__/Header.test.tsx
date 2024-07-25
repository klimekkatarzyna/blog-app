import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { Header } from "../Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("Header component", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

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

  // it("displays autors from backend", async () => {
  //   vi.mock("react-router-dom", async (importOriginal) => {
  //     const mod = await importOriginal<typeof import("react-router-dom")>();
  //     return {
  //       ...mod,
  //       useParams: () => ({ userId: "1" }),
  //     };
  //   });

  // const rendered = render(
  //   <QueryClientProvider client={queryClient}>
  //     <BrowserRouter>
  //       <Header />
  //     </BrowserRouter>
  //   </QueryClientProvider>
  // );

  // const combobox = rendered.getByRole("combobox");
  // fireEvent.keyDown(combobox, { key: "Jack", code: "KeyJ" });
  // expect(combobox.getAttribute("value")).toBe("Jack");

  // expect(await screen.findByText(/Post 1 title/i)).toBeInTheDocument();
  // await waitFor(
  //   () => {
  //     expect(screen.getByTestId("select")).toBeInTheDocument();
  //     // const button = screen.getByTestId("autors-select");
  //   }
  //   // expect(button).toBeInTheDocument();
  // );

  // const authorName = "Jack"; // Replace with the actual author name you expect
  // const authorOption = screen.getByText(authorName);
  // fireEvent.click(authorOption);

  // Check that the selected author is now displayed in the input
  // expect(screen.getByDisplayValue(authorName)).toBeInTheDocument();
  // expect(await screen.getByTestId("autors-select")).toBeInTheDocument();
  // expect(await screen.findByText(/Jack/i)).toBeInTheDocument();
  // });
});
