import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import TabButton from "./TabButton";

afterEach(cleanup);

test("should render a tab button", () => {
    render(<TabButton label="click to test" />);
    const customButtonElement = screen.getByTestId("custom-button-test");
    expect(customButtonElement).toBeInTheDocument();
});
