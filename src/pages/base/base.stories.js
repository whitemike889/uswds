// import * as Banners from "../../components/banner/banner.stories"
import { Default as Banner } from "../../components/banner/banner.stories"
import { Default as Identifier } from "../../components/identifier/identifier.stories"
import BaseTemplate from "./templates/base.twig"

export default {
  component: BaseTemplate,
  title: "Pages/Base",
}

const Template = (...args) => BaseTemplate(...args)

export const Base = Template.bind({});
Base.args = {
  Banner: Banner({...Banner.args}),
  Identifier: Identifier({ ...Identifier.args })
}
