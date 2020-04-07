import Vuex from 'vuex';

const store = () => {
    return new Vuex.Store ({
        state : {},
        mutations : {
            addLike(state, index) {
                state.liked[index] = true;
            },
            delLike(state, index) {
                state.liked[index] = false;
            },
        }
    })
}

export default store