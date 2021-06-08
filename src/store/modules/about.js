import { findTimelineList } from 'src/api/timeline.js'

const count = {
    namespaced: true,
    state: {
        timelineList: [],
    },
    mutations: {
        SET_TIMELINE: (state, { _id, detail = {} }) => {
            state.timelineList = 1
        },
    },
    actions: {
        // 时间线
        LoadTimelineList ({ commit }, params) {
            console.log('params');
            console.log(params);
            return new Promise((resolve, reject) => {
                findTimelineList(params).then(res => {
                    console.log('res');
                    console.log(res);
                    // commit('SET_TIMELINE', { _id, detail: res.data })
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
    }
}

export default count