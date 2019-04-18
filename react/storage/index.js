import {
    AsyncStorage
} from 'react-native';

class Storage {
    constructor() {
    }

    async getItem(key) {
        try {
            const res = await AsyncStorage.getItem(key);
            return JSON.parse(res);
        }catch(err) {
            console.log('Storage.setItem.error: ', err);
        }
    }

    async setItem(key, value) {
        try {
            const res = await AsyncStorage.setItem(key, JSON.stringify(value));
            return res;
        }catch(err) {
            console.log('Storage.setItem.error: ', err);
        }
    }
}

const storage = new Storage();

export default storage;