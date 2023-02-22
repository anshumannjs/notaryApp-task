import React from 'react'

export default function PersonalData(props) {

    let data1={}

    function data(){
        data1['Name']=document.getElementById("Name").value;
        data1['phoneNumber']=document.getElementById("phoneNumber").value;
        data1['email']=document.getElementById("email").value;
        data1['companyName']=document.getElementById("companyName").value;
        data1['agentName']=document.getElementById("agentName").value;
        data1['companyEmail']=document.getElementById("companyEmail").value;
        data1['companyNumber']=document.getElementById("companyNumber").value;
        data1['LoanNo']=document.getElementById("LoanNo").value;
        data1['address']=document.getElementById("address").value;
        props.setData(data1);
        props.next();
    }

    return (
        <div className='w-full p-3'>
            <div>
                <div className='font-bold text-lg'>
                    Signer Details
                </div>
                <hr className='border border-black w-[90%] mx-auto'/>
                <div className='grid grid-cols-2 space-y-3'>
                    <div className='w-[50%]'>
                        Full Name
                        <div>
                        <input id='Name' type="text" value={props.userData.firstName+" "+props.userData.lastName} className='border border-gray-400 w-full'/>
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        Phone Number
                        <div>
                        <input id='phoneNumber' type="text" value={props.userData.phoneNumber} className='border border-gray-400 w-full'/>
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        Email
                        <div>
                        <input id='email' type="text" value={props.userData.email} className='border border-gray-400 w-full'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-3'>
                <div className='font-bold text-lg'>
                    Title Company Details
                </div>
                <hr className='border border-black w-[90%] mx-auto'/>
                <div className='grid grid-cols-2 space-y-3'>
                    <div className='w-[50%]'>
                        Company Name
                        <input id='companyName' type="text" value={props.userData.businessDetails.businessName} className='border border-gray-400 w-full'/>
                    </div>
                    <div className='w-[50%]'>
                        Agent Name
                        <input id='agentName' type="text" className='border border-gray-400 w-full'/>
                    </div>
                    <div className='w-[50%]'>
                        Email
                        <input id='companyEmail' type="text" value={props.userData.businessDetails.businessEmail} className='border border-gray-400 w-full'/>
                    </div>
                    <div className='w-[50%]'>
                        Phone Number
                        <input id='companyNumber' type="text" className='border border-gray-400 w-full'/>
                    </div>
                </div>
            </div>

            <div className='mt-3'>
                <div className='font-bold text-lg'>
                    Order Info
                </div>
                <hr className='border border-black w-[90%] mx-auto'/>
                <div className='grid grid-cols-2 space-y-3'>
                    <div className='w-[50%]'>
                        Escrow #/Loan No
                        <input id='LoanNo' type="text" className='border border-gray-400 w-full'/>
                    </div>
                    <div className='w-[50%]'>
                        Property Address
                        <input id='address' type="text" className='border border-gray-400 w-full'/>
                    </div>
                </div>
            </div>
            <div className='text-center mt-5'>
            <button onClick={data} className="font-bold text-lg mx-auto border border-black w-20 rounded-lg">Next</button>
            </div>
        </div>
    )
}
