import customerStyle from './Customer.module.css';
import { FiMessageCircle } from "react-icons/fi";

const Customer = () => {
  return (
    <div className={customerStyle.customerContainer}>
      <div className="container">
      <h1 className={customerStyle.title}>Customer testimonials</h1>
        <p className={customerStyle.text}>Our customers love working with us</p>
        <div className={customerStyle.testimonials}>
            <div className={customerStyle.testimonial}>
                <div className={customerStyle.icon}><FiMessageCircle /></div>
                <p className={customerStyle.texts}>
                Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!
                <p className={customerStyle.author}>- Client Name, Location</p>
                </p>
            </div>
            <div className={customerStyle.testimonial}>
          <div className={customerStyle.icon}><FiMessageCircle /></div>
          <p className={customerStyle.texts}>
            The whole team was a huge help with putting things together for our company and brand. We will be hiring them again in the near future for additional work!
            <p className={customerStyle.author}>- Client Name, Location</p>
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Customer
