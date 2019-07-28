import Table from './Table';

export default {
    install(Vue) {
        // Let's register our component globally
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.component('vuetable-2-wrapper', Table)
    }
};
