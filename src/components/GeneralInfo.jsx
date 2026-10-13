// A section to add general information like name, email and phone number.

import { useState } from 'react'
export default function GeneralInfo() {
  const generalInfoData = {
    name: '',
    email: '',
    phoneNumber: '',
  }

  const [generalInfo, setGeneralInfo] = useState(generalInfoData)
  const [isEditing, setIsEditing] = useState(true)

  function handleChange(e) {
    setGeneralInfo({ ...generalInfo, [e.target.name]: e.target.value })
  }

  function handleToggleEdit() {
    setIsEditing(!isEditing)
  }

  if (isEditing) {
    return (
      <section>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={generalInfo.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={generalInfo.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={generalInfo.phoneNumber}
            onChange={handleChange}
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
        <div>
          <dt className="label">Name:</dt>
          <dd>{generalInfo.name}</dd>
        </div>
        <div>
          <dt className="label">Email:</dt>
          <dd>{generalInfo.email}</dd>
        </div>
        <div>
          <dt className="label">Phone No.:</dt>
          <dd>{generalInfo.phoneNumber}</dd>
        </div>
      </dl>
      <button type="button" onClick={handleToggleEdit}>
        Edit
      </button>
    </section>
  )
}
