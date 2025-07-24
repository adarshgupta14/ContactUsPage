import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import Button from '../button/Button'
import styles from './ContactForm.module.css'

const ContactForm = () => {
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                <Button text = "VIA SUPPORT CHAT" icon={<MdMessage fontSize='20px'/>}/>
                <Button text = "VIA CALL" icon={<FaPhoneAlt fontSize='20px'/>}/>
            </div>
            <Button isOutline={true} text = "VIA EMAIL FORM" icon={<HiMail fontSize='20px'/>}/>
            
            <form>
                <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' />
                </div>
                <div className={styles.form_control}>
                    <label style={{width: '65px'}} htmlFor="text">Message</label>
                    <textarea name='text' rows="8" />
                </div>
                <div style={{display: 'flex', justifyContent: 'end', marginTop: '10px'}}>
                    <Button text = "SUBMIT" />
                </div>
            </form>
            
        </div>
        <div className={styles.contact_image}>
            <img src="/images/contact.svg" alt="" />
        </div>
    </section>
  )
}

export default ContactForm