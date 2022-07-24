import React, { useEffect, useState } from 'react';
import { Container, Accordion, AccordionSummary, AccordionDetails, TableRow, TableCell, TableContainer, Table, TableHead, TableBody, Checkbox, TablePagination, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { GetSortedData, studentsFetchData } from '../../../../Redux/Action';
import { useStyles } from './styles';

const TableCont = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const data = useSelector(state => state.studentsPage.data)
    const totalCount = useSelector(state => state.studentsPage.totalCount)
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(5)
    const [sortDir, setSortDir] = useState(1)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        dispatch(studentsFetchData(newPage, size))
        console.log(newPage)
    };
    const handleChangeRowsPerPage = (event) => {
        setSize(parseInt(event.target.value, 10));
        setPage(0);
        dispatch(studentsFetchData(page, parseInt(event.target.value, 10)))
    };
    useEffect(() => {
        console.log(totalCount, page, data)
    }, [totalCount, page, data])

    const getColor = (value) => {
        const number = Number(value.replace(/[^0-9]/g, ''))
        if (number >= 90)
            return '#4285F4'
        else if (number > 80 && number < 90)
            return '#0F9D58'
        else if (number > 50 && number < 80)
            return '#E2B534'
        else return '#DB4437'
    }

    const handleOnClick = (sortBy) => {
        setSortDir(prev => !prev)
        dispatch(GetSortedData(page, size, sortBy, sortDir * -1))
    }
    return (
        <Container maxWidth={false} className={classes.table_cont}>
            <TableContainer className={classes.table_container}>
                {data && <TableRow className={classes.tableRow1} >
                    <TableCell className={classes.tableCell1}>
                        <button className={classes.tableCell_button} onClick={() => handleOnClick('name')}>Name</button>
                    </TableCell>
                    <TableCell className={classes.tableCell1}>
                        <button className={classes.tableCell_button}>ID</button>
                    </TableCell>
                    <TableCell className={classes.tableCell1}>
                        <button className={classes.tableCell_button} onClick={() => handleOnClick('class')}>Class</button>
                    </TableCell>
                    <TableCell className={classes.tableCell1}>
                        <button className={classes.tableCell_button} onClick={() => handleOnClick('score')}>AV.Score%</button>
                    </TableCell>
                    <TableCell className={classes.tableCell1}>
                        <button className={classes.tableCell_button} onClick={() => handleOnClick('speed')}>AV.Speed</button>
                    </TableCell>
                    <TableCell className={classes.tableCell1}>
                        <button className={classes.tableCell_button}>Parents</button>
                    </TableCell>
                </TableRow>}
                {data && data.map(({ class: Class, name, id, score, speed, parents, tests }) =>
                    <div className={classes.accordion_cont} key={id}>
                        <Accordion className={classes.accordion}>
                            <AccordionSummary>
                                <TableRow className={classes.accordion_tableRow}>
                                    <Checkbox />
                                    <TableCell style={{ border: 'none', width: '150px', alignItems: 'center', marginLeft: '7px' }}>{name}</TableCell >
                                    <TableCell style={{ border: 'none', width: '50px', alignItems: 'center', marginLeft: '26px' }}>{id}</TableCell >
                                    <TableCell style={{ border: 'none', marginLeft: '110px' }}>{Class}</TableCell >
                                    <TableCell style={{ color: getColor(score), border: 'none', marginLeft: '130px' }}>{score}</TableCell >
                                    <TableCell style={{ border: 'none', marginLeft: '120px' }}>{speed}</TableCell >
                                    <TableCell style={{ border: 'none', marginLeft: '15px' }}>{parents}</TableCell >
                                </TableRow>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className={classes.div_details}>
                                    <p className={classes.p_details}>STUDENT: <b className={classes.p_details}>{name}</b></p>
                                    <p className={classes.p_details}>ID: <b className={classes.p_details}>{id}</b></p>
                                    <button className={classes.details_button}>ALL CONCEPTS</button>
                                    <button className={classes.details_button}>ALL SCORE</button>
                                    <button className={classes.details_button}>ALL SPEED</button>
                                    <TextField id="standard-basic" label="SELECT PERIOD" variant="standard" />
                                    <hr style={{ border: '1px solid #A6192E' }} />
                                    <div style={{ marginBottom: '20px' }}>
                                        <div className={classes.details_speed_score}>
                                            <p style={{ marginRight: '15px' }}>SCORE</p> {tests.map((test, i) => <p style={{ color: '#4285F4' }} key={i}>{test.score !== null && `${test.score}% ACCURACY`}</p>)}
                                        </div>
                                        <div style={{ display: 'flex', maxWidth: '600px', width: 'auto', flexDirection: 'row' }}>
                                            <p style={{ marginRight: '15px' }}>SPEED</p> {tests.map((test, i) =>
                                                <p key={i} style={{ marginRight: '15px' }}>
                                                    {test.speed !== null && Number(test.speed.replace(/[^0-9]/g, '')) > Number(test.expSpeed.replace(/[^0-9]/g, ''))
                                                        ?
                                                        <p style={{ color: '#4285F4' }}>ABOVE EXPECTED</p>
                                                        :
                                                        <p style={{ color: '#DB4437' }}>BELOW EXPECTED</p>}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className={classes.according_table_div}>
                                        <TableContainer>
                                            <Table aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>#</TableCell>
                                                        <TableCell>Test Label</TableCell>
                                                        <TableCell>Score</TableCell>
                                                        <TableCell>Speed</TableCell>
                                                        <TableCell>Total Q-ns</TableCell>
                                                        <TableCell>Exp.Speed</TableCell>
                                                        <TableCell>Concept</TableCell>
                                                        <TableCell>Date</TableCell>
                                                        <TableCell>Absent</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                {tests.map((test, i) =>
                                                    <TableBody key={i}>
                                                        <TableCell className={classes.according_tableCell}>{i}.</TableCell>
                                                        <TableCell className={classes.according_tableCell}>Finding {test.label}</TableCell>
                                                        <TableCell className={classes.according_tableCell}>{test.score !== null ? test.score : "NIL"}</TableCell>
                                                        <TableCell className={classes.according_tableCell}>{test.speed !== null ? test.speed : "NIL"}</TableCell>
                                                        <TableCell className={classes.according_tableCell}>{test.total}</TableCell>
                                                        <TableCell className={classes.according_tableCell}>{test.expSpeed}</TableCell>
                                                        <TableCell className={classes.according_tableCell}>{test.concept}</TableCell>
                                                        <TableCell className={classes.according_tableCell}>{test.date}</TableCell>
                                                        <Checkbox checked={test.absent} />
                                                    </TableBody>
                                                )}
                                            </Table>
                                        </TableContainer>
                                    </div>
                                    <hr style={{ border: '1px solid #A6192E', backgroundColor: '#A6192E' }} />
                                    <div className={classes.avarage_div}>
                                        <h4>AVARAGE</h4>
                                        <p style={{ marginLeft: '140px' }}>{tests[0].score}</p>
                                        <p style={{ marginLeft: '65px', width: '50px' }}>
                                            {Number(tests[0].speed.replace(/[^0-9]/g, '')) > Number(tests[0].expSpeed.replace(/[^0-9]/g, '')) ? 'ABOVE EXPECTED' : 'BELOW EXPECTED'}
                                        </p>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                )}
            </TableContainer>
            {data && <Container className={classes.paginationContainer}>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={totalCount}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={size}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Container>}
        </Container>
    )
}
export default TableCont