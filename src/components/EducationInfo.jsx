import { useState } from 'react'

export default function EducationInfo() {
  const educationData = {
    schoolName: '',
    titleOfStudy: '',
    dateOfStudyStart: '',
    dateOfStudyEnd: '',
  }

  const [educationInfo, setEducationInfo] = useState(educationData)
  const [isEditing, setIsEditing] = useState(true)

  function handleChange(e) {
    setEducationInfo({ ...educationInfo, [e.target.name]: e.target.value })
  }

  function handleClick() {
    setIsEditing(!isEditing)
  }

  if (isEditing) {
    return (
      <section>
        <label>
          School name:
          <input
            type="text"
            name="schoolName"
            value={educationInfo.schoolName}
            onChange={handleChange}
          />
        </label>
        <label>
          Title of Study:
          <input
            type="text"
            name="titleOfStudy"
            value={educationInfo.titleOfStudy}
            onChange={handleChange}
          />
        </label>
        <label>
          Date of Study Start:
          <input
            type="date"
            name="dateOfStudyStart"
            value={educationInfo.dateOfStudyStart}
            onChange={handleChange}
          />
        </label>
        <label>
          Date of Study End:
          <input
            type="date"
            name="dateOfStudyEnd"
            value={educationInfo.dateOfStudyEnd}
            onChange={handleChange}
          />
        </label>
        <button type="button" onClick={handleClick}>
          Confirm
        </button>
      </section>
    )
  }
  return (
    <section>
      <dl>
        <div>
          <dt>School Name:</dt>
          <dd>{educationInfo.schoolName}</dd>
        </div>
        <div>
          <dt>Title of Study:</dt>
          <dd>{educationInfo.titleOfStudy}</dd>
        </div>
        <div>
          <dt>Start date:</dt>
          <dd>{educationInfo.dateOfStudyStart}</dd>
        </div>
        <div>
          <dt>End date:</dt>
          <dd>{educationInfo.dateOfStudyEnd}</dd>
        </div>
      </dl>
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </section>
  )
}
