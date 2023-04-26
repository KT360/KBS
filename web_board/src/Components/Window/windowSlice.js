const createSlice = React.lazy(() => {import('@reduxjs/toolkit')});


export const windowSlice = createSlice({
    name: 'window',
    initialState: {
        value: 0,
    },

    reducers: {
        change_page: (state) =>{
            state.value = state;
        }
    },

})

export const {change_page} = windowSlice.actions;

export default windowSlice.reducer