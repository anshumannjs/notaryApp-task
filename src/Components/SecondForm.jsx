import React from 'react'

export default function SecondForm(props) {

    let data1={}

    function data(){
        data1['signingLocation']=document.getElementById("signingLocation").value;
        data1['setData']=document.getElementById("setData").value;
        data1['setTime']=document.getElementById("setTime").value;
        console.log(data1)
        props.setData(data1);
        props.next();
    }

    return (
        <div>
            <div className='p-3 space-y-3'>
                <div className='font-bold text-lg'>
                    Signing Location
                </div>
                <hr className='border border-black w-[90%] mx-auto'/>
                <div className='w-full'>
                    Enter Signing Location
                    <input id='signingLocation' type="text" className='border border-gray-400 w-full'/>
                </div>
                <div className='grid grid-cols-2'>
                    <div className='w-[50%]'>
                        Date
                        <div>
                        <input type="date" name="" id="setData" className='border border-gray-400 w-full'/>
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        Time
                        <div>
                        <input type="time" name="" id="setTime" className='border border-gray-400 w-full'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-5'>
            <button onClick={data} className="font-bold text-lg mx-auto border border-black rounded-lg p-3">Schedule Appointment</button>
            </div>
        </div>
    )
}
