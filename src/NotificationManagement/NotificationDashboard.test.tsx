import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotificationDashboard from "./NotificationDashboard";

describe("NotificationDashboard Test cases", () => {

    it("NotificationDashboard render test", () => {
        render(<NotificationDashboard />);
    });
});