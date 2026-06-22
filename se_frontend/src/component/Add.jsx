import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Add = () => {
     const [course,setCourse] = useState({coursename: '',  instructor: '',category: '',duration: '',level: '',thumbnail: ''})
    const navigate = useNavigate()

     const handeladd = (e)=>{
     e.preventDefault()
     axios.post(`http://localhost:2000/course/addCourse`,course)
     .then((res)=>navigate('/'))
     .catch((err)=>console.log(err));
     
     }
  return (
    <>
    <div
        className="container"
    >
        <div
            className="row justify-content-center align-items-center g-2"
        >
            <div className="col">
                <div className="card ">
                    
                    <div className="card-body">
                        <h4 className="card-title">Add Course</h4>
                        <form onSubmit={handeladd}>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    onChange={(e)=>setCourse({...course,coursename:e.target.value})}
                                />
                                 <label htmlFor="formId1">coursename</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    onChange={(e)=>setCourse({...course,insturctor:e.target.value})}
                                />
                                <label htmlFor="formId1">instructor</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    onChange={(e)=>setCourse({...course,category:e.target.value})}
                                />
                                <label htmlFor="formId1">category</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    onChange={(e)=>setCourse({...course,duration:e.target.value})}
                                />
                                <label htmlFor="formId1">duration</label>

                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                   onChange={(e)=>setCourse({...course,level:e.target.value})}
                                />
                                <label htmlFor="formId1">level</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="formId1"
                                    id="formId1"
                                    placeholder=""
                                    onChange={(e)=>setCourse({...course,thumbnail:e.target.value})}
                                />
                                <label htmlFor="formId1">thumbnail</label>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                add
                            </button>
                            
                            
                        </form>
                        
                    </div>
                </div>
                


            </div>
            
        </div>
        
    </div>
    
    </>
  )
}

export default Add
