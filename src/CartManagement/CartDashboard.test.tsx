import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartDashboard from "./CartDashboard";

describe("CartDashboard Test cases", () => {

    it("CartDashboard render test", () => {
        render(<CartDashboard />);
    });
});