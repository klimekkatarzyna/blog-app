import { fireEvent, render, screen } from "@testing-library/react";
import { Select } from "../Select";
import { describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { server } from "../../test/mocks/server";
import { HttpResponse, http } from "msw";

const mockedAutors = [
  {
    email: "email@example.com",
    id: 1,
    name: "Jack",
    phone: "333888222",
    username: "Jack-2",
    website: "example",
  },
  {
    email: "email@example.com",
    id: 2,
    name: "Marc",
    phone: "333888222",
    username: "Marc-2",
    website: "example",
  },
];

describe("Native select wrapper", () => {
  it("should select works correctly", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/users", () => {
        return HttpResponse.json(mockedAutors, { status: 200 });
      })
    );

    render(
      <BrowserRouter>
        <Select list={mockedAutors} />
      </BrowserRouter>
    );
    const selectInput = await screen.findByTestId("select");
    expect(selectInput).toBeInTheDocument();

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "Jack" },
    });

    await screen.getByRole("option", { name: "Jack" });
    expect(await screen.getByRole("option")).toHaveTextContent("Jack");
  });
});
