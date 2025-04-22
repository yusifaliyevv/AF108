
import featuresStyle from './Features.module.css';
import { SiOnlyoffice } from "react-icons/si";

const Features = () => {
    const features = [
        {
           
            title: "Featured title",
            description: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words."
        },
        {
         
            title: "Featured title",
            description: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words."
        },
        {
          
            title: "Featured title",
            description: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words."
        }
    ];
  return (
    <div className={featuresStyle.features}>
      <div className="container" style={{display:"flex"}}>
      {features.map((feature, index) => (
        <div key={index} className={featuresStyle.featureItem}>
            <div className={featuresStyle.iconFeature}><SiOnlyoffice /></div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href="" className={featuresStyle.link}>
            Call to action 
            </a>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Features
