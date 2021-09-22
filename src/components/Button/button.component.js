import styled from "styled-components/native";
import { Card, Button } from "react-native-paper";

export const CustomButton = ({ mode, theme, color }) => {
  if (mode === "contained") {
    return styled(Button).attrs({
      mode: "contained",
    })`
      ${theme.fonts.heading}
    `;
  }
};
