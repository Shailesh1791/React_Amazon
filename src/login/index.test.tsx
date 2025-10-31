import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginPage from ".";
import amazonPic from "../assets/amazonG.png";

describe("Login Page", () => {

    it("amazon file test", () => {
        render(<LoginPage />);
        expect(amazonPic).toBe("test-file-stub");
    });

    it("email address display", () => {
        render(<LoginPage />);
        const emailInput = screen.getByText("Email Address");
        expect(emailInput).toBeInTheDocument();
    });

    it("passowrd field display", () => {
        render(<LoginPage />);
        const passowrdInput = screen.getByText("Password");
        expect(passowrdInput).toBeInTheDocument();
    });

    it("Sign In button display", () => {
        render(<LoginPage />);
        const signInButton = screen.getByText("Sign In");
        expect(signInButton).toBeInTheDocument();
        fireEvent.click(signInButton);
    });
});