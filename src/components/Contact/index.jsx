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
            <div className="container" style={{
                display: 'flex',
                padding: '40px 0',
                width: '90%',
                margin: '0 auto'
            }}>
                <img src="./images/contact.svg" alt="" style={{
                    width: '45%'
                }}/>
                <div style={{width:'45%'}}>
                    <form onSubmit={ dataStore} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
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
                                }} 
                            >
                            </textarea>
                        </div>
                        <button 
                            style={{
                                width: '25%',
                                padding: '.7rem  0rem',
                                borderRadius: '.3rem',
                                border: 'none',
                                backgroundColor: '#6C63FF',
                                color: 'white',
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                cursor: 'pointer'
                            }}
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