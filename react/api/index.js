import axios from 'react-native-axios';

const instance = axios.create({
    baseURL: 'http://192.168.199.245:9999/api/',
});


export default {
    getChapter(bookid, cpIndex) {
        return instance({
            method: 'get',
            url: `book/${bookid}/${cpIndex}`,
        });
    },
    getRank(type) {
        return instance({
            method: 'get',
            url: `bookrank?type=${type}`,
        });
    },
    getCategory(type) {
        return instance({
            method: 'get',
            url: `category?type=${type}`,
        });
    },
    getChapterList(id) {
        return instance({
            method: 'get',
            url: `chapterlist?id=${id}`,
        });
    }
};

// //请求拦截处理
// instance.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     return config;
// }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
// });

// //返回拦截处理
// instance.interceptors.response.use(function (response) {
//     // 对响应数据做点什么
//     return response;
// }, function (error) {
//     // 对响应错误做点什么
//     return Promise.reject(error);
// });