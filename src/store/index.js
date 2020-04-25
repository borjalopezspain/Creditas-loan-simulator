import Vue from 'vue'
import Vuex from 'vuex'

import loancalc from './loancalc';
import help from './help';
import loader from './loader';
import toaster from './toaster';

const modules = {
  loancalc,
  help,
  loader,
  toaster
};

Vue.use(Vuex);

export default new Vuex.Store({
  modules
});
