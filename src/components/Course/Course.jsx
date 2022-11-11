import React from 'react'
import './Course.css'
import { useNavigate } from 'react-router-dom'
import coursedata from '../../CourseData.json'

function Course() {

  const navigation = useNavigate();


  const handleDetail = (id) => {
navigation(`/course/${id}`);
  }
  return (
    
    <section className='section'>
      <h1>Pilih Course Favorite Mu</h1>

      <div className="course-content">
      {
        coursedata.map(el => {

          return (
            <div className='course-content-detail' key={el.id}>
              
             <img src={ el.gambar } />
              <h2>
                {el.judul}
              </h2>

              <p>{el.description}</p>
              
              <button className="course-content-detail-button" onClick={() => handleDetail(el.id)}>Baca Selengkapnya</button>
             
            </div>
          ) 
        })
      }
      </div>
    </section>
  )
}

export default Course