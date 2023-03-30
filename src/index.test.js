import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";
import { AuthContextProvider } from "./context-store/authContext";
import App from "./App";
import React from "react";

describe("Index", () => {
  it("renders App component with all providers", () => {
    render(
      <AuthContextProvider>
        <ChakraProvider>
          <BrowserRouter>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </BrowserRouter>
        </ChakraProvider>
      </AuthContextProvider>
    );
  });
});
