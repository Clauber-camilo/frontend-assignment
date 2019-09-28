import Vue from 'vue';
import Router from 'vue-router';

import DefaultLayout from 'Components/views/DefaultLayout.vue';
import CompanyData from 'Components/pages/CompanyData.vue'
import CompanyPage from 'Components/pages/CompanyPage.vue'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
      component: DefaultLayout,
      redirect: {name: 'companydata'},
			children: [
				{
					path: '/company-data',
					name: 'companydata',
					component: CompanyData
				},
				{
					path: '/company-page',
					name: 'companypage',
					component: CompanyPage
				}
			]
		}
	]
});
