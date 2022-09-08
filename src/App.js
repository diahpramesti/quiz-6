import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.css';
import Form from './component/Form';
import ListStudent from './component/list-student';

function App() {
  const [studentList, setStudentList] = useState([])

  useEffect(() => {
    localStorage.setItem('student list', JSON.stringify(studentList));
  }, [studentList])
  
  useEffect(() => {
    const getStudent = localStorage.getItem('studentList')
    if(getStudent) {
      setStudentList(JSON.parse(getStudent))
    }
  }, [])

  return(
    <Container>
      <h1 style={{ marginTop: 10, textAlign: 'center', color: 'pink'}}>Student List in Hacktiv8</h1>
      <Row>
        <h3 style={{ marginTop: 20, marginBottom: 10}}>Form to Add New</h3> 
        <Form setStudentList={setStudentList} studentList={studentList}/>
      </Row>

      <ListStudent setStudentList={setStudentList} studentList={studentList}/>

    </Container>  
  )
}

export default App;
