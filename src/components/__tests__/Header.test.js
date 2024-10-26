import { Provider } from "react-redux";
import Header from "../Header"

import { render } from "@testing-library/react"
import appStore from "../../utils/appStore";

import { BrowserRouter } from "react-router-dom";

import { screen } from "@testing-library/react";

it("it should load Header Component with a login button",()=>{



    render(

      <BrowserRouter>
        <Provider store = {appStore}>
        <Header />

        </Provider>
      
        </BrowserRouter>

    );

    const loginButton = screen.getByRole("button",{ name: "login" })

    expect(loginButton).toBeInTheDocument();
})