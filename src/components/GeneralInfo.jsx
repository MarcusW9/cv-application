// A section to add general information like name, email and phone number.

import { useState } from 'react'
export default function GeneralInfo() {

    const generalInfoData = {
        name: "",
        email: "",
        phoneNumber: ""
    }

    const [generalInfo, setGeneralInfo] = useState(generalInfoData);

    console.log(generalInfo)

    function handleChange(e) {
        setGeneralInfo({...generalInfo, [e.target.name] : e.target.value })
    }

    return (
        <section>
            <label>Name: 
                <input 
                type="text"
                name="name"
                value={generalInfo.name}
                onChange={handleChange}
                />
            </label>
            <label>Email: 
                <input 
                type="text"
                name="email"
                value={generalInfo.email}
                onChange={handleChange}
                />
            </label>
            <label>Phone Number: 
                <input 
                type="text"
                name="phoneNumber"
                value={generalInfo.phoneNumber}
                onChange={handleChange}
                />
            </label>
        </section>
    )
}