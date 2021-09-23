import React from "react";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";

import { MoviesScreen } from "../movies/movies.screen";
import { theme } from "../../../../infrastructure/theme";
import { MoviesContextProvider } from "../../../../services/movies/movie.context";
import { FavouriteMovieContextProvider } from "../../../../services/favourites/favourites.context";
import { Text } from "react-native";

import sinon from "sinon";

const willMount = sinon.spy();
const didMount = sinon.spy();

describe("test ", () => {
  it("should contain children", () => {
    //arrange
    const wrapper = mount(
      <MoviesContextProvider>
        <FavouriteMovieContextProvider>
          <MoviesScreen theme={theme}>
            <Text>Hey</Text>
          </MoviesScreen>
        </FavouriteMovieContextProvider>
      </MoviesContextProvider>,
      {
        context: {
          isLoading: false,
          movies: [{ genre: "action", data: [""] }],
          error: "",

          favouriteMovies: [],
          addToFavouriteList: jest.fn(),
          removeFromFavouriteList: jest.fn(),
        },
      }
    );
    //act

    //assertexpect(wrapper.exists('.some-class')).to.equal(true);
    expect(wrapper.find(".other-class").exists()).toBe(false);
  });
});
