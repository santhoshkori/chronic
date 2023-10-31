import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {eachtimeline} = props
  const {tagsList} = eachtimeline
  return (
    <div>
      <div className="headingcontainer">
        <h1>{eachtimeline.courseTitle}</h1>
        <div className="iconclockparacont">
          <AiFillClockCircle />
          <p>{eachtimeline.duration}</p>
        </div>
      </div>
      <p>{eachtimeline.description}</p>
      <ul className="ullistcontainer">
        {tagsList.map(eachtab => {
          const coursenames = eachtab.name
          console.log(coursenames)
          return (
            <li className="tabcontainer">
              <p>{coursenames}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
