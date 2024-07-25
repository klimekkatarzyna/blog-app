import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import PostsList from "../PostsList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { server } from "../../test/mocks/server";
import { HttpResponse, http } from "msw";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("PostsList component", () => {
  it("should display posts for api", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <PostsList />
        </BrowserRouter>
      </QueryClientProvider>
    );

    await waitFor(() =>
      expect(screen.getByTestId("list-component")).toBeInTheDocument()
    );

    const postItems = await screen.findAllByTestId("post-item");
    expect(postItems).toHaveLength(2);

    const postTitles = await screen.findAllByText(/Post \d title/i);
    expect(postTitles).toHaveLength(2);
  });

  it("should renders the component without posts", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/posts", () => {
        return HttpResponse.json([], { status: 200 });
      })
    );

    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <PostsList />
        </BrowserRouter>
      </QueryClientProvider>
    );
    await screen.findByText(/No posts/i);
  });

  it("should show error page when error occured", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/posts", () => {
        return HttpResponse.json(null, { status: 500 });
      })
    );

    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <PostsList />
        </BrowserRouter>
      </QueryClientProvider>
    );

    await waitFor(() =>
      expect(screen.getByTestId("error-page")).toBeInTheDocument()
    );
    expect(
      await screen.findByText(/Something went wrong/i)
    ).toBeInTheDocument();
  });
});
