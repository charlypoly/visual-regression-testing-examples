/* eslint-disable no-undef */
import React from "react";
import { mount } from "@cypress/react";
import Avatar from "./Avatar";

describe("Avatar", () => {
  it("renders the proper UI", () => {
    mount(<Avatar />);
    cy.matchImageSnapshot();
  });
});
