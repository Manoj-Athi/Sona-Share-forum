import React,{useState} from 'react'
import Button from '../../components/Button/Button'
import './HowToUse.css'
import LoginImage from '../../assets/how-to-use-1.png'
import CreateDiscussionImage from '../../assets/how-to-use-2.png'
import SendMessageImage from '../../assets/how-to-use-3.png'

const HowToUse = () => {
    const [step1, setStep1] = useState(true)
    const [step2, setStep2] = useState(false)
    const [step3, setStep3] = useState(false)
    const setStep = (one, two, three) => {
        setStep1(one)
        setStep2(two)
        setStep3(three)
    }
    return (
        <div>
            <div className='how-to-use__container'>
                <div>
                    <div>
                        <h1>How to use Sona Share?</h1>
                    </div>
                    <div>
                        <p>1) Just go ahead and login first<br/>but if you don't have an account then signup</p>
                        <p>2) Create a new discussion by just clicking<br/>on the plus icon near channels</p>
                        <p>3) Then start posting links, pdfs, files<br/>or what ever you want!</p>
                    </div>
                </div>
                <div className='how-to-use-image__wrapper'>
                    <img src={(step1 && LoginImage) || (step2 && CreateDiscussionImage) || (step3 && SendMessageImage)} alt="Login" />
                    <div className='how-to-use-button__wrapper'>
                        <Button type='button' onClick={()=>setStep(true, false, false)} px='14px' py='10px' color='#5D3FD3' backgroundColor='#e2c8ff'>
                            step 1
                        </Button>
                        <Button type='button' onClick={()=>setStep(false, true, false)} px='14px' py='10px' color='#5D3FD3' backgroundColor='#e2c8ff'>
                            step 2
                        </Button>
                        <Button type='button' onClick={()=>setStep(false, false, true)} px='14px' py='10px' color='#5D3FD3' backgroundColor='#e2c8ff'>
                            step 3
                        </Button>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default HowToUse