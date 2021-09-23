import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import Modal from 'react-modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DefaultButton from '../DefaultButton';
import styles from './styles.module.scss';

type LoginModalProps = {
  isOpen: boolean;
  onRequestClose: () => void
}

const LoginModal: React.FC<LoginModalProps> = ({isOpen, onRequestClose}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordIsVisible, setPasswordIsVisible] = useState(false)

  const router = useRouter()

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    if(!username || !password){
      toast("Username and password are required fields", {
        type: "error"
      })
      return
    }

    const data = {
      username,
    }

    localStorage.setItem("UserInfo", JSON.stringify(data))
    router.push('auth/dashboard')
  }

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type='button' onClick={onRequestClose} className="react-modal-close">
        <IoMdClose size={24} color="var(--white)"/>
      </button>
      <main className={styles.modalContent}>
        <h1>
          Get Started <br/>
          <span>JUST LOGIN</span>
        </h1>

      <form>
        <div>
          <label htmlFor="username"> Username: </label>
          <input 
            type="text" 
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password"> Password: </label>
          <div className={styles.inputWithIcon}>
            <input 
              type={passwordIsVisible ? 'text': 'password'} 
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {passwordIsVisible ? (
              <AiOutlineEye 
                size={24} 
                color="rgba(255, 255, 255, 1)"
                onClick={() => setPasswordIsVisible(false)}
              />
            ):(
              <AiOutlineEyeInvisible 
                size={24} 
                color="rgba(255, 255, 255, 1)"
                onClick={() => setPasswordIsVisible(true)}
              />
            )}
          </div>
        </div>
          <DefaultButton
            value="LOGIN"
            onClick={handleLogin}
          />
      </form>
      </main>
      <ToastContainer />
    </Modal>
  );
}

export { LoginModal };
