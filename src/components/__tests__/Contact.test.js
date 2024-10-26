import { render, screen } from "@testing-library/react";
import Contact from "../Contact";



describe("contact us page Test Case", () => {


    test("should load contact us component", () => {


        render(<Contact />)

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();

    });

    test("should load button inside contact us component", () => {


        render(<Contact />)

        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();

    });


    test("should input name  inside contact us component", () => {


        render(<Contact />)

        const inputName = screen.getByPlaceholderText("name");

        expect(inputName).toBeInTheDocument();

    });




    test("should load 2 input boxes on the  inside contact us component", () => {


        render(<Contact />)


        //Querying
        const inputBoxes = screen.getAllByRole("textbox");

        // console.log(inputBoxes.length)


        //Assertion
        expect(inputBoxes.length).toBe(2);

    });



})

