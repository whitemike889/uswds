// Your Twig component
import component from "./templates/input.twig";
// Faker creates random data for your components
// https://github.com/marak/Faker.js/#api-methods
// import Faker from "faker";

// Component styles
// You'll probably import the component style file from your src folder
// eg: `import './../src/scss/input.demo.scss';`
import "./sass/input.demo.scss";

// Generate data with Faker
// https://github.com/marak/Faker.js/#api-methods
const fullName = "Dan";
const fullNameEg = "Ruth";

export default {
  title: "Elements/Input",
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "text" },
    isDisabled: { control: "boolean" },
    isRequired: { control: "boolean" },
  },
};

const Template = ({ label, ...args }) =>
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  component({ label, ...args });
export const Filled = Template.bind({});
Filled.args = {
  label: "First name",
  value: fullName,
  error: "",
  placeholder: `Eg: ${fullNameEg}`,
  isDisabled: false,
  isRequired: false,
};

export const Empty = Template.bind({});
Empty.args = {
  label: "First name",
  value: "",
  error: "",
  placeholder: `Eg: ${fullNameEg}`,
  isDisabled: false,
  isRequired: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "First name",
  value: fullName,
  error: "",
  placeholder: `Eg: ${fullNameEg}`,
  isDisabled: true,
  isRequired: false,
};

export const Required = Template.bind({});
Required.args = {
  label: "First name",
  value: fullName,
  error: "",
  placeholder: `Eg: ${fullNameEg}`,
  isDisabled: false,
  isRequired: true,
};

export const Error = Template.bind({});
Error.args = {
  label: "First name",
  value: fullName,
  error: "Sorry, that’s a poor name. Try another.",
  placeholder: `Eg: ${fullNameEg}`,
  isDisabled: false,
  isRequired: false,
};
