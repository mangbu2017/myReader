import {observable, action, computed, runInAction} from 'mobx';
import API from '../api/index';

const { getCategory } = API;

class BookList {
    constructor() {
    }

    @observable listData = [];
    @observable type = '';

    @action
    async fetchCategory(type) {
        try {
            const res = await getCategory(type);
            
            const docs = res.data;

            if(docs.code === 0) {
                runInAction(() => {
                    this.listData = docs.data;
                });
            }else {
                console.error(docs.des);
            }

        }catch(err) {
            console.log('BookList.action.fetchCategory.error: ', err);
        }
    }

    @action
    setType(type) {
        this.type = type;
    }
}

export default new BookList();