import { AppBar, Container, Toolbar, Button, Box, Avatar } from '@material-ui/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStyles } from './styles';

const Header = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    return (
        <AppBar position='static' className={classes.appbar}>
            <Container className={classes.appbar_container}>
                <Toolbar>
                    <Button style={{ color: '#595959' }}>SCHOOL 1</Button>
                    <Button style={pathname === '/analytics' ? { backgroundColor: '#940c03', color: '#fff' } : { color: '#595959' }} onClick={() => navigate('/analytics')}>ANALYTICS</Button>
                    <Button style={pathname === '/gradebooks' ? { backgroundColor: '#940c03', color: '#fff' } : { color: '#595959' }} onClick={() => navigate('/gradebooks')}>GRADEBOOKS</Button>
                    <Button style={pathname === '/tests' ? { backgroundColor: '#940c03', color: '#fff' } : { color: '#595959' }} onClick={() => navigate('/tests')}>TESTS</Button>
                    <Button style={pathname === '/students' ? { backgroundColor: '#940c03', color: '#fff' } : { color: '#595959' }} onClick={() => navigate('/students')}>STUDENTS</Button>
                    <Button style={pathname === '/teachers' ? { backgroundColor: '#940c03', color: '#fff' } : { color: '#595959' }} onClick={() => navigate('/teachers')}>TEACHERS</Button>
                    <Button style={pathname === '/archive' ? { backgroundColor: '#940c03', color: '#fff' } : { color: '#595959' }} onClick={() => navigate('/archive')}>ARCHIVE</Button>
                    <Box className={classes.avarar_box}>
                        <Avatar src="https://mena.org.ua/wp-content/uploads/2014/03/avatar.png" />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header