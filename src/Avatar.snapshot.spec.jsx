import React from "react";
import renderer from "react-test-renderer";
import Avatar from "../src/Avatar";

describe("<Avatar />", () => {
  describe("with a valid image", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(
          <Avatar
            src={
              "https://i.picsum.photos/id/623/200/200.jpg?hmac=xquTjHIYmAPV3XEGlIUaV_KWyEofkbortxrK79jJhWA"
            }
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe("with an invalid image", () => {
    it("renders correctly", async () => {
      const tree = renderer.create(<Avatar src={"<not_and_url>"} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
