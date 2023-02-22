import React, { useEffect, useState } from 'react'
import MultiSteeper from './MultiSteeper'
import Services from './Services'
import PersonalData from './PersonalData'
import SecondForm from './SecondForm'
import Submission from './Submission'

export default function Form(props) {

    const [x, setX] = useState(0);
    const [data1, setData1] = useState("");
    const [data2, setData2] = useState("");
    const [data3, setData3] = useState("");

    useEffect(()=>{
        postData();
    },[data3])

    function next() {
        setX(x + 1);
    }

    function postData() {
        let a = {
            serviceInfo: data1,
            personalBuisnessData: data2,
            meetingInfo: data3
        }
        console.log(a);
        fetch(`https://notaryapp-staging.herokuapp.com/plugin/submitApptDetails`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(a)
        }).then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data);
        })
    }

    return (
        <div className='w-[80%] space-y-3'>
            <div className='font-bold text-2xl ml-3'>
                New Appointment Request
            </div>

            <MultiSteeper active={x}></MultiSteeper>

            {(x == 0) ?
                <Services next={next} setData={setData1}></Services> : ""
            }
            {(x == 1) ?
                <PersonalData next={next} setData={setData2} userData={props.userData} /> : ""
            }
            {(x == 2) ?
                <SecondForm next={next} setData={setData3} /> : ""
            }
            {(x == 3) ?
                <Submission /> : ""
            }

            {/* {(x==3)?"":
        <button className='text-lg font-bold' onClick={next}>
            {x==2?"Schedule Appointment":"Next"}
        </button>
        } */}
        </div>
    )
}
