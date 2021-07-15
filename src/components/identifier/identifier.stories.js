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

export const MultipleLogos = Template.bind({});
MultipleLogos.args = {
  masthead: {
    ...data.default.en.masthead,
    aria_label: "Agency identifier,,,",
    agency: {
      name: `<Other agency>`,
      shortname: `<Other agency shortname>`,
      url: `javascript:void(0)`,
      logo: "static/media/src/img/circle-gray-20.svg"
    }
  },
  required_links: {
    ...data.default.en.required_links,
    aria_label: "Important links,,,"
  },
  usagov: {
    ...data.default.en.usagov,
    aria_label: "U.S. government information and services,,,"
  }
}

export const MultipleLogosSpanish = Template.bind({});
MultipleLogosSpanish.args = {
  ... data.default.es,
  masthead: {
    ...data.default.es.masthead,
    aria_label: "Identificador de la agencia,,,",
    agency: {
      name: `<Other agency>`,
      shortname: `<Other agency shortname>`,
      url: `javascript:void(0)`,
      logo: "static/media/src/img/circle-gray-20.svg"
    }
  },
  required_links: {
    ...data.default.es.required_links,
    aria_label: "Enlaces importantes,,,"
  },
  usagov: {
    ...data.default.en.usagov,
    aria_label: "Información y servicios del Gobierno de EE. UU.,,,"
  }
}

export const TaxPayerDisclaimer = Template.bind({});
TaxPayerDisclaimer.args = {
  ... data.default.en,
  masthead: {
    ...data.default.es.masthead,
    aria_label: "Agency identifier,,,,",
    taxpayer_disclaimer: {
      ...data.default.en.masthead.taxpayer_disclaimer,
      display: true
    }
  },
  required_links: {
    ...data.default.es.required_links,
    aria_label: "Important links,,,,"
  },
  usagov: {
    ...data.default.en.usagov,
    aria_label: "U.S. government information and services,,,,"
  }
}

export const TaxPayerDisclaimerSpanish = Template.bind({});
TaxPayerDisclaimerSpanish.args = {
  ... data.default.es,
  masthead: {
    ...data.default.es.masthead,
    aria_label: "Identificador de la agencia,,,,",
    taxpayer_disclaimer: {
      ...data.default.es.masthead.taxpayer_disclaimer,
      display: true
    }
  },
  required_links: {
    ...data.default.es.required_links,
    aria_label: "Enlaces importantes,,,,"
  },
  usagov: {
    ...data.default.es.usagov,
    aria_label: "Información y servicios del Gobierno de EE. UU.,,,,"
  }
}
