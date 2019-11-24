import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

// Configuration for enzyme with the appropriate adapter.
Enzyme.configure({ adapter: new EnzymeAdapter() });
