import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom"

describe("Contact us Page test Cases", () => {

    test("Should load contact us component", () => {
        render(<Contact />)

        const heading = screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument();
    })

    test("Should load button inside contact component", () => {
        render(<Contact />);

        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
    });

    test("Should load input name inside contact component", () => {
        render(<Contact />);

        const inputName = screen.getByPlaceholderText("name");

        expect(inputName).toBeInTheDocument();
    })

    test("Should load 2 input boxes on the contact component", async () => {
        render(<Contact />)

        const inputBoxes = await screen.findAllByRole("textbox");

        expect(inputBoxes.length).toBe(2);
    })
});