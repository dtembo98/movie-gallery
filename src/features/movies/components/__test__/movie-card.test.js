import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { MovieCard } from "../MovieCard/moviecard.component";
import { theme } from "../../../../infrastructure/theme";

describe("<MovieCard>", () => {
  it("render without issues", () => {
    const wrapper = shallow(<MovieCard theme={theme} />);
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
