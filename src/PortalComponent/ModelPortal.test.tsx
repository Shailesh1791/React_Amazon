import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReactDOM from "react-dom";
import ModelPortal from "./ModelPortal";

describe("ModelPortal Test suite", () => {
    const childFn = jest.fn();
    it("render ModelPortal Test", () => {
        render(<ModelPortal children />);
    });
});