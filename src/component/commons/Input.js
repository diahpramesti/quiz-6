import PropTypes from 'prop-types'; // ES6
import Form from 'react-bootstrap/Form';

const Input = (props) => {
    const { placeholder, type, id ,label, isError, value, onChange, errorMessage } = props;
    
    return (
    <>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{label}</Form.Label>
            <Form.Control 
                type= { type } 
                id= {id}
                placeholder={ placeholder }
                value={ value } 
                onChange= {onChange}/>
            </Form.Group>
        </Form>
        {isError && (
            <Form.Text muted>
                {errorMessage}
            </Form.Text>
        )}
    </>    
        
    )
}

Input.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    isError: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    id: PropTypes.string
}

Input.defaultProps = {
    type: '',
    placeholder: '',
    label: ''
}

export default Input
