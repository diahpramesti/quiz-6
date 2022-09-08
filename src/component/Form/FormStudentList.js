import Input from '../commons/Input';
import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'; // ES6
import makeid from '../util/makeId';

const FormStudentList = ({setStudentList, studentList}) => {
  const [value, setValue] = useState('')
  const [isError, setIsError] = useState(false)
  const [isDisable, setIsDisable] = useState(true)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    if(value.length > 4) {
      setIsDisable(false)
    } else {
      setIsDisable(true)
    }
  }, [value])

  const handleAddStudent = () => {
    if(value.length < 4) {
      setIsError(true)
    } else {
      setStudentList([...studentList, { id: makeid(5), studentList: value, status: false}])
      setIsError(false)
      setValue('') //mengosongkan status di form setelah diisi data
      localStorage.setItem('studentList', JSON.stringify([...studentList, { id: makeid(5), studentList: value, status: false}]))
    }
  }

  return (
    <div>
        <Input 
            placeholder= {"Student Name"} 
            label= {"Student Name"}
            type= {"name"}
            value= {value}
            onChange= {handleChange}
            isError={isError}
        />
        <br />
        <Button 
          disabled={isDisable} 
          onClick={handleAddStudent} 
          variant="primary" 
          style={{backgroundColor: 'pink', border: 'pink', color: 'black'}}>
            Add Student
            </Button>
    </div>
  )
}

FormStudentList.propTypes = {
  setStudentList: PropTypes.func,
  studentList: PropTypes.array

}

export default FormStudentList;