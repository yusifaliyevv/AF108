import footerStyle from './Footer.module.css';

const Footer = () => {
  return (
    <div className={footerStyle.footerCont}>
      <div className="container" style={{textAlign:"center"}}>
        <p className={footerStyle.title}>Copyright © Your Website 2023</p>
      </div>
    </div>
  )
}

export default Footer
