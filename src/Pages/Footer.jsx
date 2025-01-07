import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"
import { add_subscriber } from "../APIvarialbles/service"



const Footer = () => {

  const [email, setEmail] = useState("")

  const handleSuccess = (message)=>{
    toast.success(message)
  }

  const handleError = (message)=>{
    toast.error(message)
  }

  const handleSubmit = async (e)=>{
     e.preventDefault()
    const formdata = new FormData()
    formdata.append("email",email)
     try{
      const response = await axios.post(add_subscriber,formdata)
       handleSuccess(response.data.message)
       setEmail("")
     }catch(error){
       handleError(response.data.message)
     }

  }




  return (

    <footer className="bg-primary py-20 roboto-regular">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Section 1 */}
          <div>
            <p className="text-white text-2xl font-semibold mb-4">Contact US</p>
            <ul className="text-white">
              <li className="break-all"><span className="text-white font-bold">Email:<br/></span>support@gogreenverz.in</li>
              <li><span className="text-white font-bold">Address</span><address>2/123B, Main Road, Sethirabalapuram,
                Mayiladuthurai, India-609806</address></li>

            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h4 className="text-white text-2xl font-semibold mb-4">Support</h4>
            <ul className="text-white">
              <li>Terms of Use</li>
              <li>Privacy</li>
              <a href="#contact" onClick={() => scrollToSection("contact")}>
                <li>Contact</li>
              </a>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h4 className="text-white text-2xl font-semibold mb-4">Quick Links</h4>
            <ul className="text-white">
              <a href="#home" onClick={() => scrollToSection("home")}>
                <li>Home</li>
              </a>
              <a href="#about" onClick={() => scrollToSection("about")}>
                <li>About</li>
              </a>
              <a href="#portfolio" onClick={() => scrollToSection("portfolio")}>
                <li>Portfolio</li>
              </a>
              <a href="#services" onClick={() => scrollToSection("services")}>
                <li>Services</li>
              </a>
              <a href="#blog" onClick={() => scrollToSection("services")}>
                <li>Blog</li>
              </a>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Subscribe our newsletter</h4>
            <div className="flex border border-primary rounded lg:py-0 py-2">
              <form className="flex">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="focus:outline-none lg:w-auto w-full py-2 px-4 text-gray-100 bg-transparent border border-white" placeholder="Your email" />
              <button onClick={(e)=>handleSubmit(e)} className="bg-primary text-white font-bold py-1 px-4 rounded">
                Subscribe
              </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}


export default Footer