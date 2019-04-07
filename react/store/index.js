import {observable, action, computed, runInAction} from 'mobx';
import API from '../api/index';
import storage from '../storage/index';

const { getChapter } = API;
console.log('getChapter', getChapter);

class UserInfo {
    constructor() {
        this.fetchInfo = this.fetchInfo.bind(this);
        // 初始化用户基本信息
        this.fetchInfo();
    }

    @observable username = '';
    @observable bookshelf = [];
    @observable readingBook = {};
    @observable readingChapter = 0;

    @action
    async fetchInfo() {
        try {
            const info = await storage.getItem('info');
            // await之后更改状态
            runInAction(() => {
                this.username = info.username;
                this.bookshelf = info.bookshelf;
            });
        }catch(err) {
            console.log('action.fetchInfo.error: ', err);
        }
    }

    @action 
    fetchChapter = async (chapter) => {
        try {
            const content = this.readingBook.chapters[chapter].content;

            if(!content) {
                let doc = await getChapter(this.readingBook._id, chapter);
                if(doc.data.code === 0) {
                    doc = doc.data.data;
                    runInAction(() => {
                        this.readingBook.chapters[chapter].content = doc;
                    });
                    return doc;    
                }else {
                    console.error(doc.data);
                }
            }
        
        }catch(err) {
            console.log('action.fetchChapter.error: ', err);
        }
    }

    @action
    fetchChapters = async (startCp, endCp) => {
        try  {
            const promArr = [];
            for(let i = startCp; i < endCp; i ++) {
                promArr.push(this.fetchChapter(i));
            }

            const docs = await Promise.all(promArr);
            
            return docs;
        }catch(err) {
            console.log('action.fetchChapters.error: ', err);
        }
    }

    @action
    checkReadingBook = (book) => {
        this.readingBook = book;
    }

    // 上下两种方法均可以实现this的正确绑定
    @action.bound
    checkReadingChapter(index) {
        this.readingChapter = index;
    }
}

export default new UserInfo();