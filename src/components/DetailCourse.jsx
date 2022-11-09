import {useParams} from "react-router-dom"
import courseData from './Course/CourseData.json'

const DetailCourse = () =>  {

    const { id } = useParams();
    console.log(id);

    return (
        <div className="detailcourse-page">
            {courseData
                .filter(( el ) => el.id ===+id)
                .map(( el ) => {
                    return (
                        <div key={el.id}>
                            <img src={el.gambar} alt="" />
                            <h2> {el.judul} </h2>
                            <p> {el.descriptionfull}</p>
                        </div>
                    )
                })}
        </div>
    )
}

export default DetailCourse