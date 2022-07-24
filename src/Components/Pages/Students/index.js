import { Container, Button, Box, Typography, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useStyles } from './styles';
import { useDispatch } from 'react-redux';
import { GetFiltredData, studentsFetchData } from '../../../Redux/Action/index'
import TableCont from './Table/index'

const Students = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [page] = useState(1)
    const [size] = useState(5)
    const [searchValue, setSearchValue] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(GetFiltredData(page, size, searchValue))
    }

    return (
        <Container maxWidth={false} style={{ padding: '0px' }}>
            <Container maxWidth={false} className={classes.students_container}>
                <Button className={classes.bar_buttons}>SHOW ALL</Button>
                <Button className={classes.bar_buttons}>ALL GRADES</Button>
                <Button className={classes.bar_buttons}>ALL CLASSES</Button>
                <Button className={classes.bar_buttons}>AV.SCORE</Button>
                <Button className={classes.bar_buttons}>AV.SPEED</Button>
                <Button className={classes.bar_buttons}>ALL CLASSES</Button>
                <Button className={classes.bar_buttons}>CLEAR ALL</Button>
            </Container>
            <Box className={classes.students_header}>
                <Typography component="h3" className={classes.students_h3}>STUDENTS</Typography>
                <form className={classes.students_form} onSubmit={handleSubmit}>
                    <TextField label="Enter Student Name, Parent or ID here" variant="outlined" className={classes.students_search}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </form>
                <Button onClick={() => dispatch(studentsFetchData(page, size))}>EXPORT CSV</Button>
            </Box>
            <TableCont />
        </Container >
    )
}
export default Students