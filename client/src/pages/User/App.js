import React,{ useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Avatar from './Avatar'
import Button from './Button'


const actions = [
    { label: "CSE", value: 1 },
    { label: "IT", value: 2 },
    { label: "FT", value: 3 }
  ];

  const stud = [
    { label: "student", value: 1 },
    { label: "staff", value: 2 },
    { label: "others", value: 3 }
  ];

const User = () => {
    const [Switch, setSwitch] = useState(false)
    const [name, setName] = useState('name')
    const [about, setAbout] = useState('about')
    const [dept, setDept] = useState('dept')
    /*const dispatch = useDispatch()*/

    const handleEdit = () => {
        setSwitch(true)
    }
    const handleCancel = () => {
        setSwitch(false)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        // console.log({name, about, tags})
        setSwitch(false)
    }

    
        
    return (
        <section>
            <div className='user-details-container'>
                <div className='user-details'>
                    <Avatar value={'M'} backgroundColor="purple" color="white" fontSize="50px" px="40px" py="30px"/>
                    <div className='user-name'>
                        <h1>mani</h1>
                        {/* <p><FontAwesomeIcon icon={faBirthdayCake}/> Member for {moment(currentProfile?.joinedOn).fromNow()}</p> */}
                    </div>
                </div>
                {/* <button className='edit-profile-btn' onClick={() => setSwitch(true)}><FontAwesomeIcon icon={faPen}/> Edit profile</button>  */}
                <Button type='button' onClick={handleEdit} px='10px' py='8px' backgroundColor='white' hoverBg='#f5f9fc' border='#7e7e7e'>
                    <FontAwesomeIcon icon={faPen}/> Edit profile
                </Button>
            </div>
            <>{
                Switch ? (
                    <>
                        <h1 className='edit-profile-title'>
                            Edit Your Profile
                        </h1>
                        <h2 className='edit-profile-titile-2'>
                            Public information
                        </h2>
                        <div className="container11">
    <div className="row11">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <Select options={ stud } />
      </div>
      <div className="col-md-4"></div>
    </div>
  </div>
                        <form className='edit-profile-form' onSubmit={handleSubmit}>
                            <label htmlFor="name">
                                <h3>Display name</h3>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                            </label>
                            
                            
                            <label htmlFor="about">
                                <h3>About me</h3>
                                <textarea name="" id="about" value={about} cols="30" rows="10" onChange={(e) => setAbout(e.target.value)}></textarea>
                            </label>
                            <label htmlFor="dept">
                                <h3>dept</h3>
                                {/* <p>Add tags separated by 1 space</p> */}
                                {/* {<input type="text" id="tags" onChange={(e) => setDept(e.target.value(' '))}></input> } */}
                                <div className="container11">
    <div className="row11">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <Select options={ actions } />
      </div>
      <div className="col-md-4"></div>
    </div>
  </div>
                                </label><br />
                            {/* <input type="submit" value="Save profile"/> */}
                            {/* <button type="button" onClick={() => setSwitch(false)}>cancel</button> */}
                            <Button type='submit' px='14px' py='10px' color='white' backgroundColor='#0a95ff' hoverBg='#0074cc'>
                                Save profile
                            </Button>
                            <Button type='button' onClick={handleCancel} px='14px' py='10px' color='#0a95ff' backgroundColor='transparent' hoverBg='transparent'>
                                Cancel
                            </Button>
                        </form>
                    </>
                ) : (
                    <>
                        { dept && (
                            <>
                                <h4>Department</h4>
                               <p>{dept}</p>                           
                                </>
                        ) 
                        }
                        { about && (
                            <>
                                <h4>About</h4>
                                <p>{about}</p>
                            </> 
                        ) 
                         }
                         {
                             !dept && !about && (
                                 <p>
                                     No bio found
                                 </p>
                             )
                         }

                    </>
                )
            }</>
        </section>
    )
          };         

export default User;
