import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { PostDetails } from "../PostDetails";
import { PostSchemaType } from "../../services/posts";

describe("PostDetails component", () => {
  const mockData: PostSchemaType = {
    id: 1,
    title: "Sample Post",
    body: "This is a sample post body.",
    userId: 1,
  };

  it("should render post details correctly", () => {
    render(<PostDetails data={mockData} />);

    expect(screen.getByText("Sample Post")).toBeInTheDocument();
    expect(screen.getByText("This is a sample post body.")).toBeInTheDocument();
    const image = screen.getByAltText("Image Description");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
    );
  });

  it("should render children correctly", () => {
    render(
      <PostDetails data={mockData}>
        <div>Child Component</div>
      </PostDetails>
    );

    expect(screen.getByText("Child Component")).toBeInTheDocument();
  });

  it("should handle undefined data gracefully", () => {
    render(<PostDetails data={undefined} />);

    expect(screen.queryByText("Sample Post")).not.toBeInTheDocument();

    expect(
      screen.queryByText("This is a sample post body.")
    ).not.toBeInTheDocument();
  });
});
