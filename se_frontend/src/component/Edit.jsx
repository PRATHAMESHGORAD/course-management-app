import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
    const [course, setCourse] = useState({
        coursename: '',
        instructor: '',
        category: '',
        duration: '',
        level: '',
        thumbnail: ''
    })
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:2000/course/showCourse/${id}`)
            .then((res) => setCourse(res.data))
            .catch((err) => console.log(err));
    }, [id])

    const handeledit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:2000/course/updateCourse/${id}`, course)
            .then((res) => navigate('/'))
            .catch((err) => console.log(err));
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center g-2">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">edit course</h4>
                                <form onSubmit={handeledit}>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="coursename"
                                            id="coursename"
                                            placeholder=""
                                            value={course.coursename}
                                            onChange={(e) => setCourse({ ...course, coursename: e.target.value })}
                                        />
                                        <label htmlFor="coursename">coursename</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="instructor"
                                            id="instructor"
                                            placeholder=""
                                            value={course.instructor}
                                            onChange={(e) => setCourse({ ...course, instructor: e.target.value })}
                                        />
                                        <label htmlFor="instructor">instructor</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="category"
                                            id="category"
                                            placeholder=""
                                            value={course.category}
                                            onChange={(e) => setCourse({ ...course, category: e.target.value })}
                                        />
                                        <label htmlFor="category">category</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="duration"
                                            id="duration"
                                            placeholder=""
                                            value={course.duration}
                                            onChange={(e) => setCourse({ ...course, duration: e.target.value })}
                                        />
                                        <label htmlFor="duration">duration</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="level"
                                            id="level"
                                            placeholder=""
                                            value={course.level}
                                            onChange={(e) => setCourse({ ...course, level: e.target.value })}
                                        />
                                        <label htmlFor="level">level</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="thumbnail"
                                            id="thumbnail"
                                            placeholder=""
                                            value={course.thumbnail}
                                            onChange={(e) => setCourse({ ...course, thumbnail: e.target.value })}
                                        />
                                        <label htmlFor="thumbnail">thumbnail</label>
                                    </div>

                                    <button type="submit" className="btn btn-primary">
                                        edit
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

export default Edit