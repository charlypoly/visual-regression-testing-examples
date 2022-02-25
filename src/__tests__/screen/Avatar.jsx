/* eslint-disable no-undef */
import React from "react";
import { mount } from "@cypress/react";
import Avatar from "../../Avatar";

describe("<Avatar />", () => {
  describe("with a valid image", () => {
    it("renders the proper UI", () => {
      mount(
        <Avatar
          src={
            "https://i.picsum.photos/id/623/200/200.jpg?hmac=xquTjHIYmAPV3XEGlIUaV_KWyEofkbortxrK79jJhWA"
          }
        />
      );
      cy.matchImageSnapshot();
    });
  });
  describe("with an invalid image", () => {
    it("renders the proper UI", () => {
      mount(<Avatar src={"<not_and_url>"} />);
      cy.matchImageSnapshot();
    });
  });
});
