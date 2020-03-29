import moment from 'moment';

const forum = {
    state: {
        post: {},
        comments: {},
        postList: [],
        loginUser: { nickname: '가나다', },
    },
    getters: {

    },
    mutations: {
        formatDate(state, postList) {
            postList.map(post => {
                if (moment().diff(post.creDate, 'days') < 1) {
                    return moment(post.creDate).format('h:mm')
                } else {
                    return moment(post.creDate).format('YY.MM.DD')
                }
            });
        },
        setComments(state, comments) {
            state.comments = comments;
        },
        setPost(state, post) {
            state.post = post;
        },
        setPostList(state, postList) {
            state.postList = postList
        },
    },
    actions: {
        getComments({ commit }, postId) {
            console.log(postId);
            let comments = [{
                commentId: '1',
                writer: "작가명",
                creDate: new Date(),
                contents: "댓글 내용임",
                likeCounts: 1,
            }, {
                commentId: '2',
                writer: "작가명",
                creDate: new Date(),
                contents: "댓글 내용임",
                likeCounts: 1,
            }];
            commit('setComments', comments);
        },
        getPost({ commit }, postId) {
            console.log(postId);
            let post = {
                postId: postId,
                branchName: "베이스캠프",
                title: "글 제목 1번",
                writer: "작가명",
                creDate: new Date(),
                contents: "내용의 일부는 여기에",
                viewCounts: 3,
                likeCounts: 12,
                commentCounts: 0
            };
            commit('setPost', post);
        },
        getPostList({ commit }) {
            let postList = [{
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
                title: '글 제목 2번',
                writer: '작가명',
                creDate: new Date(),
                contents: '내용의 일부는 여기에',
                viewCounts: 3,
                likeCounts: 12,
                commentCounts: 0,
            }, {
                postId: '3',
                branchName: '베이스캠프',
                title: '글 제목 3번',
                writer: '작가명',
                creDate: new Date(),
                contents: '내용의 일부는 여기에',
                viewCounts: 3,
                likeCounts: 12,
                commentCounts: 0,
            }, {
                postId: '4',
                branchName: '베이스캠프',
                title: '글 제목 4번',
                writer: '작가명',
                creDate: new Date(),
                contents: '내용의 일부는 여기에',
                viewCounts: 3,
                likeCounts: 12,
                commentCounts: 0,
            },
            {
                postId: '5',
                branchName: '베이스캠프',
                title: '글 제목 4번',
                writer: '작가명',
                creDate: new Date(),
                contents: '내용의 일부는 여기에',
                viewCounts: 3,
                likeCounts: 12,
                commentCounts: 0,
            },
            {
                postId: '6',
                branchName: '베이스캠프',
                title: '글 제목 4번',
                writer: '작가명',
                creDate: new Date(),
                contents: '내용의 일부는 여기에',
                viewCounts: 3,
                likeCounts: 12,
                commentCounts: 0,
            },
            {
                postId: '7',
                branchName: '베이스캠프',
                title: '글 제목 4번',
                writer: '작가명',
                creDate: new Date(),
                contents: '내용의 일부는 여기에',
                viewCounts: 3,
                likeCounts: 12,
                commentCounts: 0,
            },
            {
                postId: '8',
                branchName: '베이스캠프',
                title: '글 제목 4번',
                writer: '작가명',
                creDate: new Date(),
                contents: '내용의 일부는 여기에',
                viewCounts: 3,
                likeCounts: 12,
                commentCounts: 0,
            },
            {
                postId: '9',
                branchName: '베이스캠프',
                title: '글 제목 4번',
                writer: '작가명',
                creDate: new Date(),
                contents: '내용의 일부는 여기에',
                viewCounts: 3,
                likeCounts: 12,
                commentCounts: 0,
            },
            {
                postId: '10',
                branchName: '베이스캠프',
                title: '글 제목 4번',
                writer: '작가명',
                creDate: new Date(),
                contents: '내용의 일부는 여기에',
                viewCounts: 3,
                likeCounts: 12,
                commentCounts: 0,
            },
            {
                postId: '11',
                branchName: '베이스캠프',
                title: '글 제목 4번',
                writer: '작가명',
                creDate: new Date(),
                contents: '내용의 일부는 여기에',
                viewCounts: 3,
                likeCounts: 12,
                commentCounts: 0,
            },
            ];
            commit('formatDate', postList);
            commit('setPostList', postList);
        },
    }
}

export default forum;