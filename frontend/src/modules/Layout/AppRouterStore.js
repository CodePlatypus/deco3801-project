import { observable, action } from 'mobx';

class AppRouterStore {
    @observable activeTab = '';

    @action
    setup = () => {
        this.activeTab = 'dashboard';
    }

    @action
    handleTabClick = (e, { name }) => {
        console.log('switching to tab ' + name);
        this.activeTab = name;
    }
}

export default new AppRouterStore();