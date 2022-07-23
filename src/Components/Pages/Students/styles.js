import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
    accordion: {
        display: 'flex',
        flexDirection: 'row',
        width: '1200px'
    },
    students_container: {
        height: '50px',
        backgroundColor: '#595959',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bar_buttons: {
        color: '#b8b4b4'
    },
    students_header: {
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '40px',
        paddingRight: '300px'
    },
    students_h3: {
        fontSize: '20px',
        fontWeight: '700',
        color: '#5B5B5B'
    },
    students_form: {
        margin: '0 auto',
        marginTop: '15px'
    },
    students_search: {
        width: '447px',
         margin: '0 auto',
          padding: '0px'
    }
})
