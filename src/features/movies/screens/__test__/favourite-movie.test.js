import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import { FavouriteMoviesScreen } from "../favourite-movies/favourite-movies.screen";
import { theme } from "../../../../infrastructure/theme";

describe("test ", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FavouriteMoviesScreen theme={theme} />);
  });

  it("it works", () => {
    const snapshot = renderer.create(<FavouriteMoviesScreen />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
