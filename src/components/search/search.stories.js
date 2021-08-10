import "../../stylesheets/uswds.scss"
import component from "./templates/search.twig"
import searchIcon from "../../img/usa-icons-bg/search--white.svg"
import * as data from "./data/search.json"

const defaults = {
  icon: searchIcon,
  modifier: null,
  ...data.en
}

export default {
  title: "Components/Search",
  argTypes: {
    icon: {
      control: { type: 'file' }
    },
    modifier: {
      options: ['usa-search--big', null, 'usa-search--small'],
      control: {
        type: 'select',
        labels: {
          'usa-search--big': 'Big',
          'null': 'Default',
          'usa-search--small': 'Small'
        }
      }
    },
  }
}

const Template = (...args) => component(...args);

export const Default = Template.bind({});
Default.args = defaults;

export const Big = Template.bind({});
Big.args = {
  ...defaults,
  modifier: "usa-search--big",
  aria_label: "Big search component",
  form: {
    ...defaults.form,
    input_id: "search-field-en-big"
  }
}

export const Small = Template.bind({});
Small.args = {
  ...defaults,
  modifier: "usa-search--small",
  aria_label: "Small search component",
  form: {
    ...defaults.form,
    input_id: "search-field-en-small"
  }
}

export const DefaultSpanish = Template.bind({});
DefaultSpanish.args = {
  ...defaults,
  ...data.es
};
