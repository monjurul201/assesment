import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Student from './Components/Student';
;

function App() {
  const [student,setStudent]=useState([])
  const [searchTerm,setSearchTerm]=useState('');
  const [tagName,setTagName]=useState('');
  const [storeTags,setStoreTags]=useState([])

   useEffect(() => {
    fetch('https://api.hatchways.io/assessment/students')
    .then(res => res.json())
    .then(data => {
      //console.log(data.students)
        setStudent(data.students);

    //     const students=data.students.map(std => {
    //       std.tags=[]
    //       return std;

    //     })

    // setStudent(students)
    // console.log(student)
    })
  }, [])
  //console.log(student)
    const search=(e)=>{
      setSearchTerm(e.target.value);
    }
     const tag =(e)=>(
       setTagName(e.target.value))

     const submitForm=(e)=>{
      e.preventDefault()
      // setStoreTags((prev) => [
      //   ...prev,{tagData:tagName}
      // ]);
      const newData={
        tagData:tagName
      }
      setStoreTags([...storeTags,newData])
      
      setTagName('');
     }
     //console.log(storeTags)
  return (
    <>
    <div className='text-center mt-5 mb-5 search'>
    <input type="text" placeholder='Search By Name ' onChange={search} />
    <input type="text"  placeholder='Search By Tag ' />
    </div>
       {
        student.filter((val) =>{
          if(searchTerm==""){
            return val
          }else if(val.firstName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || val.lastName.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return val

          }}).map(student => { 
            //student.tag=[]
          return <Student tagName={tagName} storeTags={storeTags}  tag={tag} submitForm={submitForm} key={student.id} student={student}></Student>
          }) 
       } 
    </>
  );
}

export default App;
