import "../../stylesheets/uswds.scss"
import * as data from "./data/identifier.json"
import component from "./templates/identifier.twig"

export default {
  title: "Components/Identifier",
  args: data.default.en
  // argTypes: {
  //   domain: "",
  //   masthead: {
  //     aria_label: "",
  //     description: "",
  //     content: "",
  //     parent: {
  //       name: "",
  //       shortname: "",
  //       logo: "",
  //     },
  //     agency: {
  //       name: "",
  //       shortname: "",
  //       url: "",
  //       logo: ""
  //     },
  //     taxpayer_disclaimer: {
  //       content: "",
  //       display: ""
  //     },
  //   },
  //   required_links: {
  //     aria_label: "",
  //     links: [
  //       {
  //         label: "",
  //         url: "",
  //         include_shortname: ""
  //       },
  //       { label: "" },
  //       { label: "" },
  //       { label: "" },
  //       { label: "" },
  //       { label: "" },
  //       { label: "" }
  //     ]
  //   },
  //   usagov: {
  //     aria_label: "",
  //     description: "",
  //     link: {
  //       label: "",
  //       url: ""
  //     },
  //     display: ""
  //   }
  // }
}

const Template = (...args) => component(...args);
export const Default = Template.bind({});

export const DefaultSpanish = Template.bind({});
DefaultSpanish.args = data.default.es

export const NoLogos = Template.bind({});
/**
 * Re-using object properties so we can override the single logo.
 * Otherwise it would leave masthead and parent empty with our logo override.
 */
const nologoArgs = {
  ...data.default.en,
  masthead: {
    ...data.default.en.masthead,
    parent: {
      ...data.default.en.masthead.parent,
      logo: false
    }
  }
};
NoLogos.args = nologoArgs;
