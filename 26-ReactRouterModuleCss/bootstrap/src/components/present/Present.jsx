import presentStyles from "./Present.module.css"

const Present = () => {
  return (
    <div className={presentStyles.present}>
      <div className="container">
      <h1>Present your business in a <br /> whole new way</h1>
      <p style={{color:"#ffffff80", fontSize:"20px"}}>
      Quickly design and customize responsive mobile-first sites with <br /> Bootstrap, the worlds most popular front-end open source toolkit!
      </p>
      <div style={{marginTop:"40px", display:"flex", justifyContent:"center", gap:"30px"}}>
      <button className={presentStyles.buttons}>
            Get Started
        </button>
        <button className={presentStyles.button}>
            Learn More
        </button>
      </div>
      </div>
    </div>
  )
}

export default Present
