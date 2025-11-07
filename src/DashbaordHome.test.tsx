import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DashboardHome from "./DashboardHome";

describe("Dashboard render test suite", () => {
    it("dashboard render test", () => {
        render(<DashboardHome />)
    });
});