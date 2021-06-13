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
    })
  }, [])

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


     
     const searchTag=()=> {

     }

     const addTag =(tag,id)=>{
      console.log(tag)
        const newList=student.map(std =>{
             if(std.id === id){
                 std.tags = [...std.tags, tag]
             }
             return std;
         })
      console.log(newList)
         setStudent(newList)
     }
      // console.log(student);
    
  return (
    <>
    <div className='text-center mt-5 mb-5 search'>
    <input type="text" placeholder='Search By Name ' onChange={search} />
    <input type="text"  placeholder='Search By Tag ' onChange={searchTag} />
    </div>
       {
        student.filter((val) =>{
          if(searchTerm==""){
            return val
          }else if(val.firstName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || val.lastName.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return val

          }}).map(student => { 
            student.tags=[]
          return <Student tagName={tagName} addTag={addTag}  tag={tag} submitForm={submitForm} key={student.id} student={student}></Student>
          }) 
       } 
    </>
  );
}

export default App;
