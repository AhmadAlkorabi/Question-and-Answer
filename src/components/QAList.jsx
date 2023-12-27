import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { q } from '../data';
const QAList = ({data,deletOneItem}) => {
  const dataLocal = JSON.parse(localStorage.getItem('item'))
  const onDeletItem =(id)=>{
    if(localStorage.getItem('item') != null){
    const i = q.findIndex((item)=>item.id === id)
    q.splice(i,1)
    deletOneItem(q)}
  }
  return (
    <Accordion>
    {
      localStorage.getItem('item') != null ? (dataLocal.map((el , index)=>{
            return( <Accordion.Item key={index} eventKey={el.id}>
            <Accordion.Header>
                <div className='m-auto'>{el.q}</div>
            </Accordion.Header>
              <Accordion.Body className='text-end'>
                <div className='px-3 d-inline'>{el.a} </div>
                <div onClick={()=> onDeletItem(el.id)} className='btn-color d-inline'> مسح السؤال</div>
              </Accordion.Body>
            </Accordion.Item>)

        })):<h2 className='fs-4 text-center p-5'> null</h2>
    }
   
   
  </Accordion>
  )
}

export default QAList