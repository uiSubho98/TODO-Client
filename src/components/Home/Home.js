import React, { useEffect, useState } from 'react';

const Home = () => {
    const [tasks , setTasks]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/task')
        .then(res=>res.json())
        .then(data=>setTasks(data))
    },[tasks])

    const handleAdd=(event)=>{
        event.preventDefault()
        const name= event.target.name.value;
        const description= event.target.description.value;
        const newTask ={name,description}
        fetch('http://localhost:5000/task',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newTask)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
       
    }

    const handleDelete= (id)=>{
        fetch(`http://localhost:5000/task/${id}`,{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

 
  

   
  


    return (
        <>
        <form onSubmit={handleAdd} className='w-full'>
           <label class="relative block">
  <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
  </span>
  <input name='name'  class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter Your Name" type="text" />
</label>
<label class="relative block mt-5">
  <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
  </span>
  <input name='description' class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter Your Task Description" type="text"/>
</label>
<button  class="rounded-full bg-purple-500 px-5 py-2 mt-5 ml-5">Add your Task</button>
        </form>

        <div className='overflow-x-auto'>
            <table className='table w-full mx-auto mt-20'>

                <thead>
                    <tr>
                        <th>No</th>
                        <th>Task</th>
                        <th>Description</th>
                        <th>Task Confirm</th>
                        <th> task Delete</th>
                    </tr>
                </thead>
                <tbody>


                    {
                        tasks.map(task=><tr><th>#</th>
                        <td>{task.name}</td>
                        <td>{task.description}</td>
                        <td><button onClick={()=>handleDelete(task._id)} className='btn bg-red-500'>Delete 
                            </button></td>
                            
                            <td><button  className='btn btn-primary'>Confirm
                            </button></td></tr>)
                    }
                </tbody>
            </table>

            
        </div>



        </>

    );
};

export default Home;