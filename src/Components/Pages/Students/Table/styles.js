import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
    accordion_cont: {
        display: 'flex',
        flexDirection: 'row',
        width: '1200px'
    },
    table_cont: {
        padding: '0px',
        width: '1460px'
    },
    table_container: {
        margin: '0 auto',
        width: '1260px'
    },
    tableRow1: {
        display: 'flex',
        flexDirection: 'row',
        margin: '0 auto',
        width: '1260px'
    },
    tableCell1: {
        border: 'none',
        margin: '0 55px'
    },
    tableCell_button: {
        border: 'none',
        backgroundColor: '#fff',
        cursor: 'pointer'
    },
    accordion: {
        border: 'none',
        borderRadius: '1px',
        width: '1250px'
    },
    accordion_tableRow: {
        display: 'flex',
        flexDirection: 'row',
        width: '1228px',
        height: '40px'
    },
    div_details: {
        backgroundColor: '#ededed',
        width: '1250px',
        padding: '15px 70px'
    },
    p_details: {
        color: '##5B5B5B'
    },
    details_button: {
        margin: '15px 0px',
        padding: '7px 20px',
        backgroundColor: '#f7f7f7',
        color: '#5B5B5B',
        border: '1px solid grey',
        marginRight: '10px',
        fontWeight: 'bold'
    },
    details_speed_score: {
        display: 'flex',
        maxWidth: '600px',
        width: 'auto',
        flexDirection: 'row'
    },
    according_table_div: {
        display: 'flex',
        width: 'auto',
        flexDirection: 'row'
    },
    according_tableCell: {
        padding: '10px'
    },
    avarage_div: {
        marginTop: '15px',
        marginLeft: '60px',
        display: 'flex',
        flexDirection: 'row'
    },
    paginationContainer: {
        width: '100%',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: '100%'
    }

})