import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ModelPortal from './ModelPortal';
import PortalDisplay from "./PortalDisplayPage";

describe("PortalDisplay Test suite", () => {

    it("render PortalDisplay Test", () => {
        render(<PortalDisplay />);
    });
});