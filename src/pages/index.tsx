import Head from 'next/head'
import DefaultButton from '../components/DefaultButton'
import {DefaultHeader} from '../components/Header/Default'
import {RiCheckboxCircleFill} from 'react-icons/ri'

import styles from './home.module.scss'
import { useState } from 'react'
import Modal from 'react-modal'
import { LoginModal } from '../components/LoginModal'

Modal.setAppElement('#root')

const Home: React.FC = () => {
  const [activeOption, setActiveOption] = useState<string>('student')
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false)
  }

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true)
  }

  return (
    <>
      <LoginModal
        isOpen={isLoginModalOpen}
        onRequestClose={handleCloseLoginModal}
      />
      <Head>
        <title>Eduick</title>
      </Head>
      <main className={styles.loginContainer}>
        <DefaultHeader 
          onOpenLoginModal={handleOpenLoginModal}
        />
        <div>
        <aside> 
          <img src="/images/image-detail.svg"/>
        </aside>
        <div className={styles.contentContainer}>
          <h1>
            Find your <br/>
            <span>BEST TEACHER</span>
          </h1>
          <p>
            Whether you are a student trying to find your ideal   private <br/> language teachers/tutors or a teacher   trying to find great students<br/> for your customised   private lessons!
          </p>
          <form>
            <input type="text" placeholder="Type here what are you looking for"/>
            <div className={styles.selectButtonsContainer}>
              <button 
                className={activeOption === 'teacher' && styles.active} // Change button style when select
                type="button"
                onClick={() => {setActiveOption('teacher')}}
              >
                {activeOption === 'teacher' ? (
                  <RiCheckboxCircleFill size={23} color="var(--yellow-500"/>
                ) : (
                  <div/>
                )}
                i'm a teacher
              </button>
              <button 
                className={activeOption === 'student' && styles.active}
                type="button"
                onClick={() => {setActiveOption('student')}}
              >
                {activeOption === 'student' ? (
                  <RiCheckboxCircleFill size={23} color="var(--yellow-500"/>
                ) : (
                  <div/>
                )}
                i'm a student
              </button>
            </div>
            <DefaultButton
              value="SEARCH"
            />
          </form>
        </div>
        </div>
      </main>
    </>
  )
}

export default Home