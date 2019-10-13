import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';

import toggleStore from '../toggle';

describe('STORE :: Toggle', () => {
  let localVue;
  let store;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    store = new Vuex.Store({...toggleStore});
  })

  test('Should return false in initial state', () => {
    expect(store.state.company_data_modal).toBe(false);
  });

  test('Should change the state properly', () => {
    expect(store.state.company_data_modal).toBe(false);
    store.commit('toggle', 'company_data_modal');
    expect(store.state.company_data_modal).toBe(true);
  });

});