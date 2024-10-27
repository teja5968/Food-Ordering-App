import { render,screen } from "@testing-library/react";

import MOCK_DATA from "../mocks/resCardMock.json"

import RestaurantCard  from "../ResturantCard"
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";

it("it should rendered Restaurant Card Component with props Data ",()=>{



    render(<RestaurantCard resData = {MOCK_DATA}/>)

    const name = screen.getByText("Udupi Ahaar");

    expect(name).toBeInTheDocument();




});