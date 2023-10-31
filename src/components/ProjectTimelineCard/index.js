import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLineCard = props => {
  console.log(props)
  const {eachtimeline} = props
  return (
    <div>
      <img
        src={eachtimeline.imageUrl}
        alt="project"
        className="projectimgsty"
      />
      <div className="headingcontainer">
        <h1>{eachtimeline.projectTitle}</h1>
        <div className="iconclockparacont">
          <AiFillCalendar />
          <p>{eachtimeline.duration}</p>
        </div>
      </div>
      <p>{eachtimeline.description}</p>
      <a href={eachtimeline.projectUrl} className="achorele">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimeLineCard
