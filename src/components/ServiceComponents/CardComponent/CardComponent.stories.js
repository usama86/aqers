import CardComponent from './index'

export default {
  title: 'garana/ServiceComponents/CardComponent',
  component: CardComponent,
}

const Template = (args) => <CardComponent {...args} />

export const CardComponentSB = Template.bind({})

CardComponentSB.args = {
  children: <></>,
  image: '/images/card.png',
  maxWidth: 345,
  imageHeight: 140,
  imageWidth: 345,
}
