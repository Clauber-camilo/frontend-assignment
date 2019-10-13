import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';

import ModalTemplate from '../ModalTemplate.vue';
import toogleStore from 'Store/modules/toggle';

const localVue = createLocalVue();
localVue.use(Vuex);

const mockToggleStore = toogleStore;

describe('Component :: ModalTemplate', () => {
  let store;
  let storeMockedAction;
  let actions;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        toggle: mockToggleStore
      }
    });

    actions = {
      toggle: jest.fn()
    };

    storeMockedAction = new Vuex.Store({
      modules: {
        toggle: {...mockToggleStore, actions}
      }
    });
  });

  describe('computed getter', () => {
    test('Should get the properly value in computed getter', () => {
      const wrapper = shallowMount(ModalTemplate, {
        propsData: {
          modalType: 'company_data_modal'
        },
        store,
        localVue
      });

      const isActive = wrapper.vm.isActive;
      expect(isActive).toBe(false);
    })

    test('Should return undefined if not find the property', () => {
      const wrapper = shallowMount(ModalTemplate, {
        propsData: {
          modalType: 'test'
        },
        store,
        localVue
      });

      const isActive = wrapper.vm.isActive;
      expect(isActive).not.toBeDefined;
    })

    test('Should get the actual value of active if store changes', () => {
      const wrapper = shallowMount(ModalTemplate, {
        propsData: {
          modalType: 'company_data_modal'
        },
        store,
        localVue
      });

      let isActive = wrapper.vm.isActive;
      expect(isActive).toBe(false);

      wrapper.vm.$store.dispatch('toggle', wrapper.vm.$props.modalType);
      isActive = wrapper.vm.isActive;

      expect(isActive).toBe(true);
    })
  })

  describe('methods', () => {
    test('Should call action properly', () => {
      const wrapper = shallowMount(ModalTemplate, {
        propsData: {
          modalType: 'company_data_modal'
        },
        store: storeMockedAction,
        localVue
      });

      const modalEL = wrapper.find('.modal-template');
      modalEL.trigger('click');

      expect(actions.toggle).toHaveBeenCalled();
    });
  })
})