import {observable, action, computed, runInAction} from 'mobx';
import API from '../api/index';

class BookDetail {
    constructor() {
    }

    @observable book = {};

    // @action
    // async fetchCategory(type) {
    //     try {
    //         const res = await getCategory(type);
            
    //         const docs = res.data;

    //         if(docs.code === 0) {
    //             runInAction(() => {
    //                 this.listData = docs.data;
    //             });
    //         }else {
    //             console.error(docs.des);
    //         }

    //     }catch(err) {
    //         console.log('BookList.action.fetchCategory.error: ', err);
    //     }
    // }

    @action
    setDetail(book) {
        this.book = book;
    }
}

export default new BookDetail();