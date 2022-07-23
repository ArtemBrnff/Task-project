export const url = 'https://test-task-j.herokuapp.com/data?'

export const studentsFetchDataSuccess = (data, totalCount) => {
    return {
        type: 'STUDENTS_FETCH_DATA',
        data,
    }
}
export const totalCountAC = (totalCount) => {
    return {
        type: 'GET_TOTAL_COUNT',
        totalCount
    }
}

export const studentsFetchData = (page, size) => {
    return (dispatch) => {
        fetch(`${url}&page=${page}&size=${size}`)
            .then(response => response.json())
            .then(data => dispatch(studentsFetchDataSuccess(data)))
    }
}

export const getTotalCount = (page, size) => {
    return (dispatch) => {
        fetch(`${url}&page=${page}&size=${size}`)
            .then(response => response.json())
            .then(totalCount => dispatch(totalCountAC(totalCount)))
    }
}

export const GetFiltredData = (page, size, searchName) => {
    return (dispatch) => {
        fetch(`${url}&page=${page}&size=${size}&search=${searchName}`)
            .then(response => response.json())
            .then(data => dispatch(studentsFetchDataSuccess(data)))
    }
}

export const GetSortedData = (page, size, sortBy, sortDir) => {
    return (dispatch) => {
        fetch(`${url}&page=${page}&size=${size}&sortBy=${sortBy}&sortDir=${sortDir}`)
            .then(response => response.json())
            .then(data => dispatch(studentsFetchDataSuccess(data)))
    }
}