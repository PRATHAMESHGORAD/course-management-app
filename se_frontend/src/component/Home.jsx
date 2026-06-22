import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

const Home = () => {
    const [courses, setCourses] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:2000/course/showcourses')
            .then((res) => setCourses(res.data))
            .catch((err) => console.log(err));
    }, [])

    const hadeldelete = (e, id) => {
        e.preventDefault()
        axios.delete(`http://localhost:2000/course/deleteCourse/${id}`)
            .then((res) => {
                setCourses(courses.filter((course) => course._id !== id))
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center g-2">
                    {
                        courses.map((course) => (
                            <div className="col-md-4 mb-4" key={course._id}>
                                <div className="card">
                                    <img className="card-img-top" src={course.thumbnail} alt="Title" />
                                    <div className="card-body">
                                        <h4 className="card-title">{course.coursename}</h4>
                                        <p className="card-text">{course.instructor}</p>
                                        <p className="card-text">{course.category}</p>
                                        <p className="card-text">{course.duration}</p>
                                        <p className="card-text">{course.level}</p>

                                        <NavLink
                                            className="btn btn-primary me-2"
                                            to={`/edit/${course._id}`}
                                            role="button"
                                        >
                                            edit
                                        </NavLink>

                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={(e) => hadeldelete(e, course._id)}
                                        >
                                            delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home