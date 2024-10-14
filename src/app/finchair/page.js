import styles from './page.module.css'
import Image from 'next/image'
import ProjectHeader from '@/components/ProjectHeader'
import OverviewSection from '@/components/OverviewSection'
import TitleSection from '@/components/TitleSection'
import ImageSection from '@/components/ImageSection'

export const metadata = {
  title: 'FinChair | Natalie Waites'
}

export default function ProjectPage() {
  return (
    <>
      <main className={styles.main}>
        <ProjectHeader projectName={"FinChair"} projectDescription={"A credit score motivation app. Increase your score and win rewards."}  imageSource={"/images/finchair/header-img-both.png"} imageAlt={"Two Finchair app screens. Bills screen and rewards screen."} imageWidth={5000} imageHeight={5945}/>
        <OverviewSection
          overviewTitle={"Overview"}
          overviewSummary={"Redesigning the UI for FinChair, an app designed to simplify credit management and prevent missed payments. The goal was to help users boost their credit scores through centralised tracking and an engaging reward system. Our client sought a modernised UI design to appeal to the target audience and drive user acquisition."} 
          roleTitle={"Role: UI Design"} 
          roleText={"Visual redesign, high-fidelity prototyping, design system, gamification for reward flow"} 
          teamTitle={"Team"} 
          teamText={"Natalie Waites, Tiffany Leung, Grace Savage"} 
          designTitle={"Design Toolkit"} 
          designText={"Figma, FigJam, Slack, Adobe Photoshop and Illustrator"} 
          successTitle={"Success metrics"} 
          successOne={"Successfully beta test 100 users with the MVP"}
          successTwo={"Minimum 50 brands on-board in first 3 months"}
          successThree={"Acquire 5000 users within first year of launching"}
          successFour={"Raise seed investment of £150,000"}
        />
        <Image className={styles.onlyImg} src="/images/finchair/finchair-screens.jpg" alt="Ten iphone screens showing different pages of the finchair app" width={4500} height={3000}/>
        <TitleSection title={"The Brief"} information={"Our client had already developed the initial design for FinChair's first version. However, they recognised the need for simplification to enhance usability for their target audience. The app featured a space-themed design, with users advancing through their financial journey by visiting different planets. To keep users motivated, the app included a reward system tied to this space themed adventure."}/>
        <ImageSection imgTitle={"UI designs the client provided (version 1.0)"} imageSource={"/images/finchair/Client designs.png"} imageAlt={"Finchair original UI designs provided by client"} imageWidth={3626} imageHeight={1751} imgDescription={"The original deisgn had some accessibility issues, including not meeting contrast guidlines. It also lacked a clear user journey and visual hierarchy with the pages looking fairly similar. The designs helped to see what information and layout users would need/expect within the app. "}/>
        <TitleSection title={"Starting with Inspiration"} information={"As a team we headed into design discussions and ideas. We could see the need for modernisation and how the new design encourage users to trust the application as a financial tool. Discussions led to moving away from being illustration heavy and make the design more abstract to make it more timeless. This was important as users would need to trust the app to hold their financial information. We put together a mood board to capture initial thoughts"}/>
        <Image className={styles.onlyImg} src="/images/finchair/Moodboard-finchair.png" alt="Moodboard for Finchair design" width={5105} height={3778}/>
        <TitleSection title={"Initial design ideas"} information={"Our team went away and drafted up some initial design ideas using the information we had gathered from the client interview, the research, UX and designs provided. As well as using our inspiration and what we knew about the users to put together our individual take on how the application could look. We dissected the pros and cons of each design as a group before heading into the next meeting."}/>
        <ImageSection imageSource={"/images/finchair/first-designs.png"} imageAlt={"First designs for the finchair app"} imageWidth={7400} imageHeight={3508}/>  
        <TitleSection title={"Design Sprint"} information={"With a clear direction from the client feedback we jumped into design. We worked on various iterations and A,B tested as we went to establish the preferred design with users. I worked on components and design of the home, bills and rewards pages. Tiffany also worked on the components, wallet and design assets. Grace worked on video assets and log in page. We worked together well, using Figma comments to share feedback and progress."}/>
        <TitleSection title={"Final Designs"} information={"After testing with users and making any final design edits we presented the final designs to the client. We had some very positive feedback from the client. In particular they loved the abstract space theme and thought it put accross a sophisticated aesthetic. He also really enjoyed the gamification of the rewards section, as he had a few designers look at this project and found this to be unqiue and stand out for the brand. Encouraging more investment and user adoption in the early stages."}/>
        <div className={styles.finalSection}>
          <Image className={styles.onlyImg} src="/images/finchair/Homepages.png" alt="Five homepage screenshots for the finchair app final designs" width={6000} height={3500}/> 
        </div>  
      </main>
    </>
  )
}
