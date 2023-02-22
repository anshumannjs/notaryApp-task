import React from 'react'

export default function Services(props) {

    let data1 = {}

    function clicked(e) {
        // document.getElementById(e).classList.add('border-purple-400')
        // document.getElementById(e).classList.add('bg-yellow-200')
        // document.getElementById(e).classList.remove('border-gray-400')
        document.getElementById(e).focus();
    }

    function data() {
        data1['extraSignature'] = document.getElementById("extraSignature").value;
        data1['witness'] = document.getElementById("witness").value;
        data1['signCount'] = document.getElementById("signCount").value;
        data1['fileCount'] = document.getElementById("fileCount").value;
        props.setData(data1);
        props.next();
    }

    return (
        <div className='w-full'>
            <div className='flex w-full space-x-3 ml-3'>
                <div className='w-[45%] space-y-3'>
                    <div id='1' tabIndex={'0'} className='w-full border border-gray-400 p-3 rounded-lg cursor-pointer focus:bg-yellow-200' onClick={() => clicked(1)}>
                        <div className='text-lg font-bold'>
                            Notary Signing Agent
                        </div>
                        <div>
                            Suitable for those who have purchased a brand new car
                        </div>
                        <div className='font-bold mt-2'>
                            view details
                        </div>
                    </div>

                    <div id='2' tabIndex={'0'} className='w-full border border-gray-400 p-3 rounded-lg cursor-pointer focus:bg-yellow-200' onClick={() => clicked(2)}>
                        <div className='text-lg font-bold'>
                            Remote Online Notary
                        </div>
                        <div>
                            Suitable for those who have a valid third party cover
                        </div>
                        <div className='font-bold mt-2'>
                            view details
                        </div>
                    </div>

                    <div id='3' tabIndex={'0'} className='w-full border border-gray-400 p-3 rounded-lg cursor-pointer focus:bg-yellow-200' onClick={() => clicked(3)}>
                        <div className='text-lg font-bold'>
                            Mobile General Notary
                        </div>
                        <div>
                            Suitable for those who use the car infrequently
                        </div>
                        <div className='font-bold mt-2'>
                            view details
                        </div>
                    </div>
                </div>

                <div className='border border-gray-400 p-3 rounded-lg w-[50%]'>
                    <div className='text-lg font-bold text-center'>
                        Calculate your costs for RON!
                    </div>

                    <div className='flex my-3'>
                        <div className='w-[80%]'>
                            <div className='font-bold'>
                                No of Extra Signatures
                            </div>
                            <div>
                                Please enter zero, if only one signature is required
                            </div>
                        </div>
                        <input id='extraSignature' type="text" className='w-[20%] border border-gray-500' />
                    </div>

                    <div className='flex my-3'>
                        <div className='w-[80%] font-bold'>
                            How many Files will you be uploading in the session
                        </div>
                        <input id='fileCount' type="text" className='w-[20%] border border-gray-500' />
                    </div>

                    <div className='flex my-3'>
                        <div className='w-[80%] font-bold'>
                            Number of Signers
                        </div>
                        <input id='signCount' type="text" className='w-[20%] border border-gray-500' />
                    </div>

                    <div className='flex my-3'>
                        <div className='w-[80%]'>
                            <div className='font-bold'>
                                Do you Need Witness
                            </div>
                            <div>
                                Do not enter anything if you are bringing your own witness
                            </div>
                        </div>
                        <input id='witness' type="text" className='w-[20%] border border-gray-500' />
                    </div>

                    <div className='text-center mt-5'>
                        <div className='font-bold text-lg'>
                            Your approximate quote: $59
                        </div>
                    </div>
                </div>

            </div>
            <div className='text-center mt-5'>
            <button onClick={data} className="font-bold text-lg mx-auto border border-black w-20 rounded-lg">Next</button>
            </div>
        </div>
    )
}
