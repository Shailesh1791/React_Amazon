import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InventoryDashboard from "./InventoryDashboard";

describe("InventoryDashboard Test cases", () => {

    it("InventoryDashboard render test", () => {
        render(<InventoryDashboard />);
    });
});