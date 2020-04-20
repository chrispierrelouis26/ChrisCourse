import React from "react";
import { mount } from "enzyme";
import App from "./App";

describe("App", () => {
  let app = mount(<App />);

  it("renders the app title", () => {
    expect(app.find("h2").text()).toEqual("Note to self");
  });

  it("renders the clear button", () => {
    expect(app.find(".btn").at(1).text()).toEqual(" Clear Notes ");
  });

  describe("when rendering the from", () => {
    it("creates a from component", () => {
      expect(app.find("Form").exists()).toBe(true);
    });

    it("renders form control component", () => {
      expect(app.find("FormControl").exists()).toBe(true);
    });
  });
});
