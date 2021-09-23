import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { CloseButton } from "../close-button/close-button.component";
import { theme } from "../../../../infrastructure/theme";

describe("<CloseButton/>", () => {
  it("it works", () => {
    const wrapper = shallow(<CloseButton theme={theme} />);
    expect(wrapper.children().exists()).toBe(true);
  });
});

// describe("interaction", () => {
//   it("should call on pressable", () => {
//     //arrange
//     const mockOnPress = sinon.spy();
//     const wrapper = shallow(
//       <CloseButton
//         onPress={mockOnPress}
//         navigation={mockOnPress}
//         theme={theme}
//       />
//     );

//     //Act
//     wrapper.handleOnPress();

//     //assert

//     wrapper.find("button").simulate("click");
//     expect(mockOnPress).toHaveBeenCalled();
//     expect(mockOnPress).toHaveBeenCalledTimes(1);
//   });
// });
