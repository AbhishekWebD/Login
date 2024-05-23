import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faLock, faPenNib, faUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'

export const Login = () => {
    return (
        <div className="container-fluid p-0">
            <div className='row'>
                <div className='col-md-4 border'>
                    <form className='form p-5'>
                        <div className='Txt'>
                            <h1 className='login'><FontAwesomeIcon icon={faLock} className='px-2' />Login</h1>
                            <p>Username <FontAwesomeIcon icon={faUser} className='px-2' /></p>
                            <input className='input' type="Username" placeholder="type your username" />
                            <p className='mt-3'>Password<FontAwesomeIcon icon={faKey} className='px-2' /></p>
                            <input className='input' type="Password" placeholder="Password" />
                            <br />
                            <NavLink className="navlink mt-2" to='/forgot'>Forgot Password ?</NavLink>
                            <button className="BTN Bg-IMG w-100">Login</button>
                            < br />
                            <p>Or Sign Up Using</p>
                            <FontAwesomeIcon className='icon' icon={faFacebook} />
                            <FontAwesomeIcon className='icon' icon={faInstagram} />
                            <FontAwesomeIcon className='icon' icon={faTwitter} />
                            <p className=''>Or Sign Up Using</p>
                            <NavLink to='/Signup'>Sign Up</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}