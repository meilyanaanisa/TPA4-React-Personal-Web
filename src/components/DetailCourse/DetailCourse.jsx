import {useParams} from "react-router-dom"
import courseData from '../../CourseData.json'
import './DetailCourse.css'

const DetailCourse = () =>  {

    const { id } = useParams();

    return (
        <section className="detailcourse-page">
            {courseData
                .filter(( el ) => el.id ===+id)
                .map(( el ) => {
                    return (
                        <div className="detailcourse-description" key={el.id}>
                            <div className="detail-judul">
                            <h2> {el.judul} </h2>
                            </div>
                            <div className="detail-gambar">
                            <img src={el.gambar} alt="" />
                            </div>
                            <div className="detail-deskripsi">
                            <p> {el.descriptionfull}</p>
                            </div>
                        </div>
                    )
                })}
        </section>
    )
}

export default DetailCourse