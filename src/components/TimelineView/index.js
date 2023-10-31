import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  console.log(props)
  const {timelineItemsList} = props

  return (
    <div className="cronocontainer">
      <h1 className="headingalign">MY JOURNEY OF CCBP 4.0</h1>

      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(eachtimeline => {
          if (eachtimeline.categoryId === 'COURSE') {
            return <CourseTimelineCard eachtimeline={eachtimeline} />
          }
          return <ProjectTimeLineCard eachtimeline={eachtimeline} />
        })}
      </Chrono>
    </div>
  )
}
export default TimelineView
