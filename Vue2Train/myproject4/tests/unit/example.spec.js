import { shallowMount } from '@vue/test-utils';
import ButtonJustify from '@/components/ButtonJustify.vue';

describe('ButtonJustify.vue', () => {
  it('показывает текст из пропсов на кнопке', () => {
    const buttonText = 'Click me';
    const wrapper = shallowMount(ButtonJustify, {
      slots: {
        default: buttonText,
      },
    });
    expect(wrapper.text()).toMatch(buttonText);
  });

  it('по нажатию emit функции click', () => {
    const wrapper = shallowMount(ButtonJustify);
    wrapper.trigger('click.native');
    expect(wrapper.emitted().click).toBeTruthy();
  });

  it('кнопка выравнивается по заданному значению', () => {
    const justifyValue = 'right';
    const wrapper = shallowMount(ButtonJustify, {
      propsData: {
        justify: justifyValue,
      },
    });
    expect(wrapper.attributes('justify')).toBe(justifyValue);
  });
});