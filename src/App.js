import { useState } from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import FormInputs from './components/FormInputs';
import QAList from './components/QAList';
import { q } from './data';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [data, setData] = useState(q)
  const addItem =()=>{
    localStorage.setItem('item',JSON.stringify([...q]))
setData([...q]) 
notify("تم الاضافة بنجاح", "Success")
  }
  
  const deletAllItems=()=>{
    localStorage.removeItem('item')
    q.splice(0,q.length)
    setData([]) 
    notify("تم حذف الكل بنجاح", "Success")
  }
  const deletOneItem =(rq)=>{
    localStorage.setItem('item',JSON.stringify([...rq]))


    setData([...rq]) 
    notify("تم حذف السوال بنجاح", "Success")
    if(rq.length <=0){
      deletAllItems()
    }
  }
  const notify = (message, type) => {
    if (type === "Error")
      toast.error(message)
    else if (type === "Success")
      toast.success(message)
  };
  return (
    <div className="font text-center color-body"> 
      <Container className='p-5'>
        <Row className='justify-content-center'>
        <Col sm='4'>
          <div className='fs-3 text-center'>اسئلة واجوبة</div>
        </Col>
        <Col sm='8'>
          <FormInputs onAdd={addItem}  notify={notify}/>
          <QAList data={data} deletOneItem={deletOneItem} />
          {localStorage.getItem('item') != null? (<button onClick={deletAllItems}  className='btn-color w-100 my-4 '>مسح الكل</button>) : null }
        </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
