import '../styles/PracticalExperience.css'
import { useState, Fragment } from 'react'

export default function PracticalExperience() {
  const [experienceIds, setExperienceIds] = useState([
    { id: crypto.randomUUID() },
  ])

  const isLastExperience = experienceIds.length === 1

  function handleAddExperience() {
    setExperienceIds([...experienceIds, { id: crypto.randomUUID() }])
  }

  function handleDeleteExperience(id) {
    if (isLastExperience) return
    setExperienceIds(experienceIds.filter((experience) => experience.id !== id))
  }

  return (
    <section>
      <h2>Experience</h2>
      {experienceIds.map((experience) => (
        <Experience
          key={experience.id}
          id={experience.id}
          onDelete={handleDeleteExperience}
          isLastExperience={isLastExperience}
        />
      ))}
      <button
        type="button"
        className="button-secondary"
        onClick={handleAddExperience}
      >
        Add Experience
      </button>
    </section>
  )
}

function Experience({ id, onDelete, isLastExperience }) {
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
      <section className="experience">
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
        <div className="experience-period">
          <div className="experience-dates">
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
          </div>
          <label className="checkbox-label">
            This is my current experience:
            <input
              type="checkbox"
              onChange={handleCurrentExperience}
              checked={practicalExperience.isCurrentExperience}
            />
          </label>
        </div>
        <div className="button-row">
          <button type="button" onClick={handleToggleEdit}>
            Confirm
          </button>

          <button
            type="button"
            className="button-danger"
            disabled={isLastExperience}
            onClick={() => onDelete(id)}
          >
            Remove Experience
          </button>
        </div>
      </section>
    )
  }
  return (
    <section className="experience">
      <dl>
        <div>
          <dt>Company Name:</dt>
          <dd>{practicalExperience.companyName}</dd>
        </div>

        <div>
          <dt>Position Title:</dt>
          <dd>{practicalExperience.positionTitle}</dd>
        </div>

        <div>
          <dt>Main Responsibilities:</dt>
          <dd>{practicalExperience.mainResponsibilities}</dd>
        </div>

        {practicalExperience.isCurrentExperience ? (
          <div>
            <dt>Start Date:</dt>
            <dd>{practicalExperience.startDate} – Present</dd>
          </div>
        ) : (
          <Fragment>
            <div>
              <dt>Start Date:</dt>
              <dd>{practicalExperience.startDate}</dd>
            </div>
            <div>
              <dt>End Date:</dt>
              <dd>{practicalExperience.endDate}</dd>
            </div>
          </Fragment>
        )}
      </dl>

      <button type="button" onClick={handleToggleEdit}>
        Edit
      </button>
    </section>
  )
}
