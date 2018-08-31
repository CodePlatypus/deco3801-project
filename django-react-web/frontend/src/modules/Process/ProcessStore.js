import { observable, action } from 'mobx';
import files from './Constants/files';

class ProcessStore {
    /* Configurations to track stage progress */
    @observable config = {
        stage: '',
        isSingleFile: true,
    };

    /* Component to be rendered */
    @observable component = {}

    /* Fields for upload stage */
    @observable selectedFiles = [];

    /* Fields for sample stage */
    @observable sampleLocation = '';
    @observable sampleType = '';
    @observable sampleDate = '';
    

    @action
    setup = () => {
        console.log('Setting up Process fields');
        this.config['stage'] = 'upload';
        this.config['isSingleFile'] = true;
        this.selectedFiles = files;
    }

    @action
    updateProperty = (key, value) => {
        this.config[key] = value;
    }

    @action
    updateSelectedFiles = (file) => {
        this.selectedFiles = file;
    }


}

export default new ProcessStore();