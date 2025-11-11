import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import LoginPage from ".";
import amazonPic from "../assets/amazonG.png";

describe("Login Page", () => {

    it("amazon file test", () => {
        render(<BrowserRouter><LoginPage /></BrowserRouter>);
        expect(amazonPic).toBe("test-file-stub");
    });

    it("email address display", () => {
        render(<BrowserRouter><LoginPage /></BrowserRouter>);
        const emailInput = screen.getByText("Email Address");
        expect(emailInput).toBeInTheDocument();
    });

    it("passowrd field display", () => {
        render(<BrowserRouter><LoginPage /></BrowserRouter>);
        const passowrdInput = screen.getByText("Password");
        expect(passowrdInput).toBeInTheDocument();
    });

    it("Sign In button display", () => {
        render(<BrowserRouter><LoginPage /></BrowserRouter>);
        const signInButton = screen.getByText("Sign In");
        expect(signInButton).toBeInTheDocument();
        fireEvent.click(signInButton);
    });
});