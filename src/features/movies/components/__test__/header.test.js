import React from "react";
import { shallow } from "enzyme";
import { Text } from "react-native";

import { Header } from "../header/header.component";
import { theme } from "../../../../infrastructure/theme";

describe("<Header/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Header theme={theme}>
        <Text>some text</Text>
        <Text>some text</Text>
      </Header>
    );
  });
  it("has has children", () => {
    expect(wrapper.children().exists()).toBe(true);
  });

  it("renders children when passed in", () => {
    expect(wrapper.length).toBe(1);
  });
});

// describe("interaction", () => {
//   it("should call on pressable", () => {
//     //arrange
//     const mockOnPress = sinon.spy();
//     const wrapper = shallow(
//       <Header onPress={mockOnPress} navigation={mockOnPress} theme={theme} />
//     );

//     //Act
//     wrapper.handleOnPress();

//     //assert

//     wrapper.find("button").simulate("click");
//     expect(mockOnPress).toHaveBeenCalled();
//     expect(mockOnPress).toHaveBeenCalledTimes(1);
//   });
// });
