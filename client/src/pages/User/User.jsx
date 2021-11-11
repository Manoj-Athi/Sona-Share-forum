import React,{ useState } from 'react'
import Select from 'react-select';

import './App.css'
import Avatar from './Avatar'
import Button from '../../components/Button/Button'
import SideBar from '../../components/Sidebar/SideBar'
import { useChatContext } from 'stream-chat-react';

const User = () => {
    const { client } = useChatContext();
    const [Switch, setSwitch] = useState(false)
    const [fullName, setfullName] = useState(client.user.fullName || client.user.id)
    const [about, setAbout] = useState(client.user.about || '')
    const [profession, setProfession] = useState(client.user.profession || '')
    const [year, setYear] = useState(client.user.year || '')
    const [dept, setDept] = useState(client.user.dept || '')
    const [sec, setSec] = useState(client.user.sec || '')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // console.log(client)
    const option1 = [
        { label: "Student", value: "Student" },
        { label: "Staff", value: "Staff" },
        { label: "Others", value: "Others" }
    ];
    const option2 = [
        { label: "CSE", value: "CSE" },
        { label: "IT", value: "IT" },
        { label: "FT", value: "FT" },
        { label: "ECE", value: "ECE" },
        { label: "EEE", value: "EEE" },
        { label: "MECH", value: "MECH" },
        { label: "Other", value: "Other" },
    ];
    const option3 = [
        { label: "1st year", value: "1st year" },
        { label: "2nd year", value: "2nd year" },
        { label: "3rd year", value: "3rd year" },
        { label: "4th year", value: "4th year" }
    ];
    const option4 = [
        { label: "A", value:'A' },
        { label: "B", value:'B' },
        { label: "C", value:'C' },
        { label: "D", value:'D' },
    ]
    const handleEdit = () => {
        setSwitch(true)
    }
    const handleCancel = () => {
        setSwitch(false)
        
    }
    const changeProfession = (option) => {
        setProfession(option.value)
    }
    const changeDept = (option) => {
        setDept(option.value)
    }
    const changeYear = (option) => {
        setYear(option.value)
    }
    const changeSection = (option) => {
        setSec(option.value)
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        // console.log({fullName, about, profession, dept, year})
        if(loading) return;
        setLoading(true);
        try {
            const update = {
                id: client.userID,
                set: { 
                    fullName, 
                    about: about !== '' && about, 
                    profession: profession !== '' && profession, 
                    year: year !== '' && year, 
                    dept: dept !== '' && dept,
                    sec: sec !== '' && sec
                }
            }
            const response = await client.partialUpdateUser(update); 
            // console.log(response)
        } catch (error) {
           setError(true);
        }
        setLoading(false);
        setSwitch(false)
    }
    return (
        <div className='user-page'>
            <div className="channel-list__container">
                <SideBar />
            </div>
            <section>
            <>{
                Switch ? (
                    <div className='edit-profile__container'>
                        <h1 className='edit-profile-title'>
                            Edit Your Profile
                        </h1>
                        <h2 className='edit-profile-titile-2'>
                            Public information
                        </h2>
                        <div className="container11">
                            <Select options={ option1 } onChange={changeProfession}/>
                        </div>
                        <form className='edit-profile-form' onSubmit={handleSubmit}>
                            <label htmlFor="name">
                                <h3>Display name</h3>
                                <input type="text" value={fullName} onChange={(e) => setfullName(e.target.value)}/>
                            </label>
                            <label htmlFor="dept">
                                <h3>Department</h3>
                                <div style={{width: '390px'}}>
                                    <Select options={ option2 } onChange={changeDept}/>
                                </div>
                            </label>
                            {
                                profession === "Student" && (
                                    <div style={{display:'flex', justifyContent:'space-between'}}>
                                        <label htmlFor="year">
                                            <h3>Year</h3>
                                            <div style={{width: '390px'}}>
                                                <Select options={ option3 } onChange={changeYear}/>
                                            </div>
                                        </label>
                                        <label htmlFor="Dept">
                                            <h3>Section</h3>
                                            <div style={{width: '350px'}}>
                                                <Select options={ option4 } onChange={changeSection}/>
                                            </div>
                                        </label>
                                    </div>
                                )
                            }
                            <label htmlFor="about">
                                <h3>About me</h3>
                                <textarea name="" id="about" value={about} cols="30" rows="10" onChange={(e) => setAbout(e.target.value)}></textarea>
                            </label><br />
                            <Button type='submit' px='14px' py='10px' color='white' backgroundColor='#5D3FD3' border='#5D3FD3'>
                                Save profile
                            </Button>
                            <Button type='button' onClick={handleCancel} px='14px' py='10px' color='#5D3FD3' backgroundColor='transparent' hoverBg='transparent'>
                                Cancel
                            </Button>
                        </form>
                    </div>
                ) : (
                    <div className='user-details-container'>
                        <div className='user-details__wrapper'>
                            <div className='user-details'>
                                <Avatar value={fullName.charAt(0).toUpperCase()} backgroundColor="#5D3FD3" color="white" fontSize="50px" px="40px" py="30px"/>
                                <div className='user-name'>
                                    <h1>{fullName || 'id'}</h1>
                                    <p>{profession || 'Profession'}</p>
                                    <p>{year || 'Year'} - {dept || 'Dept'} - {sec || 'Sec'}</p>
                                </div>
                            </div>
                            { about ? (
                                <>
                                    <h4>About</h4>
                                    <p>{about}</p>
                                </> 
                            ):(
                                <p>
                                    No bio found
                                </p>
                            )}
                        </div>
                        <Button type='button' onClick={handleEdit} px='10px' py='8px' backgroundColor='white' hoverBg='#f5f9fc' border='#7e7e7e'>
                            Edit profile 
                        </Button>
                    </div>
                )
            }</>
        </section>
        </div>
    )
}

export default User
