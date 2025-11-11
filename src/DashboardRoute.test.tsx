import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import DashboardRoute from "./DashboardRoute";

describe("DashboardRoute render test suite", () => {
    it("DashboardRoute render test", () => {
        render(<MemoryRouter><DashboardRoute /></MemoryRouter>);
    });
});