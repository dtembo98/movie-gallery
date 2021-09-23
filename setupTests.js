import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import "react-native-gesture-handler/jestSetup";

jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

configure({ adapter: new Adapter() });
