import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App Component", () => {
  beforeEach(() => {
    render(<App />);
  });

  test('displays "Now" in the header instead of a time', () => {
    // Check that time string is NOT present
    const timeRegex = /\w+ \d{1,2}\w{2} \d{4}, \d{1,2}:\d{2}:\d{2} [AP]M/;
    expect(screen.queryByText(timeRegex)).not.toBeInTheDocument();

    // Check that "Now" is present
    expect(screen.getByRole("heading", { name: /now/i })).toBeInTheDocument();
  });

  test("renders the ExampleComponent", () => {
    expect(screen.getByText("Whoa!")).toBeInTheDocument();
    expect(screen.getByAltText("time video")).toBeInTheDocument();
  });

  test("renders the TestComponent", () => {
    expect(screen.getByTitle("time video")).toBeInTheDocument();
  });
});