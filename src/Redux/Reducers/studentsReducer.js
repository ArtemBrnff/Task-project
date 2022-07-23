const studentsReducer = (state = [], action) => {
    switch (action.type) {
        case 'STUDENTS_FETCH_DATA':
            return action.data
            case 'GET_TOTAL_COUNT':
                return action.totalCount
        default:
            return state
    }
}
export default studentsReducer