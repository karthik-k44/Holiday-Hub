import React, { useState } from 'react'

export const AddPassenger = () => {
  const [passenger, setPassenger]= useState([{
    name:"",
    age:"",
    gender:"",
    contact:"",
    email:"",

  }])

  const [passengers, setPassengers]= useState([])

  const HandleEvent =(e)=>{
    const {name, value}= e.target
    setPassenger(prev=>({
      ...prev,
      [name]:value
    }))
  }

    
  const HandleSubmit= (e)=>{
    e.preventDefault()
    
    console.log(passenger)
  }
  
  console.log(passenger)
  return (
   <>
      <form action="" onSubmit={HandleSubmit}>
        <label htmlFor="" >Name of Passenger : </label>
        <input type="text"  name="name" value={passenger.name} onChange={HandleEvent} />
        <br />
        <br />
        <label htmlFor="" >Age : </label>
        <input type="text" name="age" value={passenger.age} />
        <br />
        <br />
        <label htmlFor="" >Gender : </label>
        <select name="gender" value={passenger.gender}>
          <option value="Others"> Others</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br />
        <br />
        <label htmlFor="">Contact number : </label>
        <input type="text" name="contact" value={passenger.contact}/>
        <br />
        <br />
        <label htmlFor="" > Email : </label>
        <input type="email" name="email" value={passenger.email} />

        <button type='submit'>Add passenger</button>
      </form>
   </>
  )


}
