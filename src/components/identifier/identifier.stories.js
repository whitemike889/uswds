import "../../stylesheets/uswds.scss"
import * as data from "./data/identifier.json"
import component from "./templates/identifier.twig"

export default {
  title: "Components/Identifier",
  args: data.default.en
const Template = (...args) => component(...args);
export const Default = Template.bind({});

export const DefaultSpanish = Template.bind({});
DefaultSpanish.args = data.default.es
}
