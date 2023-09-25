import { useState,useEffect } from "react";
import "./Form.css"

function Form(){
 
  const [employee,setEmployee] = useState();
  const getMovie = () => {
    fetch(" https://650a7453dfd73d1fab0863ad.mockapi.io/reacdata")
    .then((data) => data.json())
    .then((mvs) => setEmployee(mvs));
    
  }
  
  useEffect(()=> {
    getMovie();
    
  })


        const[name,setName]= useState();
        const[empnu,setEmpnu]= useState();
        const[native,setNative]= useState();
        const[age,setAge]= useState();
        const[bldgrp,setBldgrp]= useState();
        const[trans,setTrans]= useState();
      
        const addData = () => {
            
           const newData = {
        name,
        empnu,
        native,
        age,
        bldgrp,
        trans
    }
  // console.log(newData);
  fetch(" https://650a7453dfd73d1fab0863ad.mockapi.io/reacdata",{
      method:"POST",
      body: JSON.stringify(newData),
      headers:{"Content-type":"application/json"},
    })
    setEmployee([...employee,newData]);
    setName("")
    setEmpnu("")
    setAge("")
    setNative("")
    setBldgrp("")
    setTrans("")
}
  
const editData = (empid) => {
  // console.log(empid);

}
    return<div >
      <h1 className="head-form">Emplyee Form</h1>
      <div className="input-box">
        <label for="name" >Name: 
        </label>
        <input type="text" id="name" 
        value={name}
        onChange={(ele)=> setName(ele.target.value)}
        placeholder="Enter your Name"/>
        <label for="emp-No" >Emp No: 
        </label>
        <input type="text" id="emp-No" 
        value={empnu}
        onChange={(ele)=> setEmpnu(ele.target.value)}
        placeholder="Enter your Emp No"/>
        <label for="native" >Native: 
        </label>
        <input type="text" id="native" 
        value={native}
        onChange={(ele)=> setNative(ele.target.value)}
        placeholder="Enter your Native"/>
        <label for="age" >Age: 
        </label>
        <input type="text" id="age" 
        onChange={(ele)=> setAge(ele.target.value)}
        value={age}
        placeholder="Enter your Age"/>
        <label for="blood-group" >Blood group: 
        </label>
        <input type="text" id="blood-group"
        onChange={(ele)=> setBldgrp(ele.target.value)}
        value={bldgrp}
        placeholder="Enter your Blood group"/>
        <label for="transport" >Transport: 
        </label>
        <input type="text" id="transport" 
        onChange={(ele)=> setTrans(ele.target.value)}
        value={trans}
        placeholder="Enter your Transport"/>
        <button className="btn-input" onClick={addData}>Submit</button>
      
      </div>
      <div>
        <h1>Table</h1>
        <div >
           <table className="table-data">
            <thead className="table-data">
                <th className="thead">Name</th>
                <th className="thead">Emp no</th>
                <th className="thead">Native</th>
                <th className="thead">Age</th>
                <th className="thead">Blood Grp</th>
                <th className="thead">Transport</th>
            </thead>
            {employee.map((emp,id)=> 
            <tbody key={id} >

                 
               <td className="tbody">{emp.name}</td>
               <td className="tbody">{emp.empnu}</td>
               <td className="tbody">{emp.native}</td>
               <td className="tbody">{emp.age}</td>
               <td className="tbody">{emp.bldgrp}</td>
               <td className="tbody">{emp.trans}</td>
               <button onClick={editData()}>Edit</button>
               <button>Delete</button>
              
            </tbody>
               )}
           </table>
        </div>
        <div>

        </div>
    </div>
    </div>
}


export default Form;

















// function Table(){

    
//     return<div>
//         <h1>Table</h1>
//         <div >
//            <table className="table-data">
//             <thead className="table-data">
//                 <th className="thead">Name</th>
//                 <th className="thead">Emp no</th>
//                 <th className="thead">Native</th>
//                 <th className="thead">Age</th>
//                 <th className="thead">Blood Grp</th>
//                 <th className="thead">Transport</th>
//             </thead>
//             {employee.map((emp)=> 
//             <tbody >

                 
//                <td className="thead">{emp.name}</td>
//                <td className="thead">{emp.empnu}</td>
//                <td className="thead">{emp.native}</td>
//                <td className="thead">{emp.age}</td>
//                <td className="thead">{emp.bldgrp}</td>
//                <td className="thead">{emp.trans}</td>
              
//             </tbody>
//                )}
//            </table>
//         </div>
//         <div>

//         </div>
//     </div>
// }