// A section to add practical experience
// (company name, position title,
// main responsibilities of your jobs,
// date from and until when you worked for that
// company)

import { useState, Fragment } from 'react'

export default function PracticalExperience() {
  const [experienceIds, setExperienceIds] = useState([
    { id: crypto.randomUUID() },
  ])

  function handleAddExperience() {
    setExperienceIds([...experienceIds, { id: crypto.randomUUID() }])
  }

  return (
    <section>
      {experienceIds.map((experience) => (
        <Experience key={experience.id} />
      ))}
      <button type="button" onClick={handleAddExperience}>
        Add Experience
      </button>
    </section>
  )
}

function Experience() {
  const practicalExperienceData = {
    companyName: '',
    positionTitle: '',
    mainResponsibilities: '',
    startDate: '',
    endDate: '',
    isCurrentExperience: false,
  }

  const [practicalExperience, setPracticalExperience] = useState(
    practicalExperienceData,
  )
  const [isEditing, setIsEditing] = useState(true)

  function handleChange(e) {
    setPracticalExperience({
      ...practicalExperience,
      [e.target.name]: e.target.value,
    })
  }

  function handleToggleEdit() {
    setIsEditing(!isEditing)
  }

  function handleCurrentExperience() {
    setPracticalExperience({
      ...practicalExperience,
      isCurrentExperience: !practicalExperience.isCurrentExperience,
    })
  }

  if (isEditing) {
    return (
      <section>
        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            value={practicalExperience.companyName}
            onChange={handleChange}
          />
        </label>
        <label>
          Position Title:
          <input
            type="text"
            name="positionTitle"
            value={practicalExperience.positionTitle}
            onChange={handleChange}
          />
        </label>
        <label>
          Main Responsibilities:
          <textarea
            name="mainResponsibilities"
            value={practicalExperience.mainResponsibilities}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={practicalExperience.startDate}
            onChange={handleChange}
          />
        </label>
        {!practicalExperience.isCurrentExperience && (
          <label>
            End Date:
            <input
              type="date"
              name="endDate"
              value={practicalExperience.endDate}
              onChange={handleChange}
            />
          </label>
        )}
        <label>
          This is my current experience:
          <input
            type="checkbox"
            onChange={handleCurrentExperience}
            checked={practicalExperience.isCurrentExperience}
          />
        </label>
        <button type="button" onClick={handleToggleEdit}>
          Confirm
        </button>
      </section>
    )
  }
  return (
    <section>
      <dl>
        <dt>Company Name:</dt>
        <dd>{practicalExperience.companyName}</dd>

        <dt>Position Title:</dt>
        <dd>{practicalExperience.positionTitle}</dd>

        <dt>Main Responsibilities:</dt>
        <dd>{practicalExperience.mainResponsibilities}</dd>

        {practicalExperience.isCurrentExperience ? (
          <Fragment>
            <dt>Start Date:</dt>
            <dd>{practicalExperience.startDate} – Present</dd>
          </Fragment>
        ) : (
          <Fragment>
            <dt>Start Date:</dt>
            <dd>{practicalExperience.startDate}</dd>
            <dt>End Date:</dt>
            <dd>{practicalExperience.endDate}</dd>
          </Fragment>
        )}
      </dl>

      <button type="button" onClick={handleToggleEdit}>
        Edit
      </button>
    </section>
  )
}
