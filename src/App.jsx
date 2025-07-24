import './App.css'
import ContactForm from './components/contactForm/ContactForm'
import ContactHeader from './components/contactHeader/ContactHeader'
import Navigation from './components/Navigation/Navigation'

const App = () => {
  return (
    <div>
      <Navigation/>
      <main className='main_container'>
        <ContactHeader/>
        <ContactForm/>
      </main>
    </div>
  )
}

export default App