import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
    strict: process.env.NODE_ENV === 'development',
    state: {
        postList: [{
            postId: '1',
            branchName: '베이스캠프',
            title: '글 제목 1번',
            writer: '작가명',
            creDate: new Date(),
            contents: '내용의 일부는 여기에',
            viewCounts: 3,
            likeCounts: 12,
            commentCounts: 0,
        }, {
            postId: '2',
            branchName: '베이스캠프',
            title: '글 제목 1번',
            writer: '작가명',
            creDate: new Date(),
            contents: '내용의 일부는 여기에',
            viewCounts: 3,
            likeCounts: 12,
            commentCounts: 0,
        }, {
            postId: '3',
            branchName: '베이스캠프',
            title: '글 제목 1번',
            writer: '작가명',
            creDate: new Date(),
            contents: '내용의 일부는 여기에',
            viewCounts: 3,
            likeCounts: 12,
            commentCounts: 0,
        }, {
            postId: '4',
            branchName: '베이스캠프',
            title: '글 제목 1번',
            writer: '작가명',
            creDate: new Date(),
            contents: '내용의 일부는 여기에',
            viewCounts: 3,
            likeCounts: 12,
            commentCounts: 0,
        },
        ],
        loginUser: { nickname: '가나다', },
    },
    mutations: {

    },
    actions: {

    }
})

export default store

