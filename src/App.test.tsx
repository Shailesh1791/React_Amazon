import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App render test suite", () => {
    it("App render test", () => {
        render(<App />)
    });
});