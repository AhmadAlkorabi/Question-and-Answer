import React, { useState } from 'react'
import { Row, Form, Col } from 'react-bootstrap';
import { q} from '../data';
const FormInputs = ({onAdd, notify}) => {

  const [ques, setques] = useState('')
  const [ans, setans] = useState('')
  const addNewItem =()=>{ 
    if (ques === "" || ans === "") {
      notify("من فضلك اكمل البيانات", "Error");
      return;
  }
    q.push({id:Math.random() , q:ques , a:ans})
    setans('')
    setques('')
    onAdd()
    console.log(q)

  }
  return (
    <Row className='my-2'>
      
    <Col sm='5'> <Form.Control value={ques} onChange={(e)=>{
      setques(e.target.value)
    }} type="text" placeholder="ادخل السؤال" /></Col>
    <Col sm='5'> <Form.Control value={ans} onChange={(e)=>{
      setans(e.target.value)
    }} type="text" placeholder="ادخل الجوب" /></Col>
    <Col sm='2'> 
        <button onClick={addNewItem} className='btn-color' type="submit">
        اضافة
        </button>
    </Col>
    </Row>
  )
}

export default FormInputs