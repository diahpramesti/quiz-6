import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types'; // ES6
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import setLocalStorage from '../util/setLocalStorage';

const ListStudent = ({ studentList, setStudentList }) => {
    
    const handleDelete = (student) => {
        let newStudent = studentList.filter((t) => t.id !== student.id)
        console.log(newStudent)
        setStudentList(newStudent)
        setLocalStorage('studentList', newStudent)
        
    }
    
    

    return(
        <div style={{ marginTop: 64}}>
            <h1>List Student</h1>
            {studentList.length ? (
                <ListGroup>
                    {studentList.map((studentList) => (
                        <ListGroup.Item key={studentList.id}>
                            <Row>
                                <Col style={{margin: 'auto'}}>
                                    {studentList.studentList}
                                </Col>
                                <Col xs={2}>
                                    {/* <Button >
                                        Update
                                    </Button>  */}
                                </Col> 
                                <Col xs={1}>
                                    <Button style={{backgroundColor: 'pink', border:'pink'}} onClick={() => handleDelete(studentList)}>
                                        Delete
                                    </Button> 
                                </Col> 
                                
                            </Row>
                                
                            
                        </ListGroup.Item>
                    ))}
                </ListGroup>                
            ): (
                <div>
                    <h2>No Student</h2>
                </div>
            )}
            
        </div>
        
    )
}

ListStudent.propTypes = {
    studentList: PropTypes.array,
    setStudentList: PropTypes.func
}

ListStudent.defaultProps = {
    studentList: []
}

export default ListStudent