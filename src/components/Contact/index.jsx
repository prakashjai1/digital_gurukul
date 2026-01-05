import {useState} from 'react'
import swal from 'sweetalert2'
const Contact = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const dataStore = (e)=>{
        e.preventDefault()
        alert(fullName + '\n' + email + '\n' + message)

        swal.fire({
            icon:'success',
            titel:'success',
            text:'Thank you!'
        })
    }

    return (
        <>
            <div className="container flex md:flex-row md:py-[40px] w-[90%] mx-auto flex-col items-center gap-20 py-[2rem]">
                <img src="./images/contact.svg" className='md:w-[45%] w-[90%]' alt=""/>
                <div className='md:w-[45%] w-[90%]'>
                    <form onSubmit={ dataStore} className='flex flex-col gap-[20px]'>
                        <div>
                            <label htmlFor="name" style={{fontSize:'1.5rem', fontWeight:'500', display:'block', marginBlock: '0 .5rem'}}>Fullname</label>
                            <input onChange={(e)=>setFullName(e.target.value)} type="text" id="name" name="name" placeholder="Enter name here" required
                                style={{
                                    width: '100%',
                                    border: '1px solid gray',
                                    paddingBlock: '1rem',
                                    paddingInline: '.5rem 0',
                                    borderRadius: '.2rem',
                                    outline: 'none'
                                }}
                            />
                            
                        </div>

                        <div>
                            <label htmlFor="email" style={{fontSize:'1.5rem', fontWeight:'500', display:'block', marginBlock: '0 .5rem'}}>Email</label>
                            <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email" name="email" placeholder="example@gmail.com" required 
                                style={{
                                    width: '100%',
                                    border: '1px solid gray',
                                    paddingBlock: '1rem',
                                    paddingInline: '.5rem 0',
                                    borderRadius: '.2rem',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <div>
                            <label htmlFor="message" style={{fontSize:'1.5rem', fontWeight:'500',display:'block', marginBlock: '0 .5rem'}}>Message</label>
                            <textarea onChange={(e)=>setMessage(e.target.value)} id="message" name="message" placeholder="Write you query or message here" rows={5} required 
                                style={{
                                    width:'100%',
                                    paddingBlock: '1rem',
                                    paddingInline: '.5rem 0',
                                    border: '1px solid gray',
                                }} 
                            >
                            </textarea>
                        </div>
                        <button 
                            className='md:w-[25%] py-[.7rem] rounded-[.3rem] border-none bg-[#6C63FF] text-white text-[1.5rem] font-[700] cursor-pointer'
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact