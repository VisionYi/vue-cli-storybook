import MyButton from './Button.vue';

export default {
  title: 'Example/Button',
  component: MyButton,
  decorators: [
    () => ({
      template: `
        <div style="padding: 40px; background: #ccc">
          <story/>
        </div>
      `,
    }),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Primary2 = () => ({
  components: { MyButton },
  template: '<my-button primary label="Button" />',
});

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
  ...Primary.args,
  backgroundColor: '#f22020',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
