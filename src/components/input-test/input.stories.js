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
const defaults = {
  label: "First name",
  value: fullName,
  error: "",
  placeholder: `Eg: ${fullNameEg}`,
  isDisabled: false,
  isRequired: false,
}

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
Filled.args = defaults;

export const Empty = Template.bind({});
Empty.args = {
  ...defaults,
  value: "",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...defaults,
  isDisabled: true
};

export const Required = Template.bind({});
Required.args = {
  ...defaults,
  isRequired: true,
};

export const Error = Template.bind({});
Error.args = {
  ...defaults,
  error: "Sorry, that’s a poor name. Try another."
};
