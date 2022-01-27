
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import I18nextRender from './I18nextRender';
import i18next from '../i18n';

configure({ adapter: new Adapter() });

describe('i18next initiation', () => {
  it('should be able to import i18next', () => {
    expect(i18next).toBeDefined();
  });
  it('should be able to import i18next.init', () => {
    expect(i18next.init).toBeDefined();
  });
  it('should be able to import i18next.t', () => {
    expect(i18next.t).toBeDefined();
  });
  it('should be able to import i18next.changeLanguage', () => {
    expect(i18next.changeLanguage).toBeDefined();
  });
  it('should be able to import i18next.getFixedT', () => {
    expect(i18next.getFixedT).toBeDefined();
  });
  it('should render the text "this is only a test phrase" ', () => {
    const wrapper = mount(<I18nextRender />);
    expect(wrapper.find('h1').text()).toEqual('this is only a test phrase');
  });
});
