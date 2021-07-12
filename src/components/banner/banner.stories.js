import component from "./templates/banner.twig";
import "../../stylesheets/uswds.scss";
import flagImg from "../../img/us_flag_small.png";
import dotGovImg from "../../img/icon-dot-gov.svg";

const defaults = {
  flagImg,
  dotGovImg,
  banner: {
    id: "gov-banner-default",
    text: "An official website of the United States government",
    action: "Here's how you know",
    aria_label: "Official government website"
  },
  domain: {
    heading: "Official websites use .gov",
    text: `A <strong>.gov</strong> website belongs to an official government organization in the United States.`
  },
  https: {
    heading: "Secure .gov websites use HTTPS",
    pretext: `A <strong>lock</strong>`,
    posttext: `or <strong>https://</strong> means you’ve safely connected to the .gov website. Share sensitive information only on official, secure websites.`
  }
}


export default {
  title: "Components/Banner",
  argTypes: {
    banner: {
      id: { control: "text" },
      text: { control: "text" },
      action: { control: "text" },
      aria_label: { control: "text" }
    }
  }
}

const Template = (...args) => component(...args);

export const Default = Template.bind({});
Default.args = defaults;
