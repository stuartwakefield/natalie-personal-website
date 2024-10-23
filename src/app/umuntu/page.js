import styles from './page.module.css'
import Image from 'next/image'
import ProjectHeader from '@/components/ProjectHeader'
import OverviewSection from '@/components/OverviewSection'
import TitleSection from '@/components/TitleSection'
import ImageSection from '@/components/ImageSection'
import CasestudyBanner from '@/components/CasestudyBanner'
import ReviewSection from '@/components/ReviewSection'

export const metadata = {
  title: 'Umuntu | Natalie Waites'
}

export default function ProjectPage() {
  return (
    <main className={styles.main}>
      <ProjectHeader projectName={"Umuntu"} projectDescription={"A central place for the Nigerian Diaspora to connect and share information."}  imageSource={"/images/umuntu/umuntu-header.png"} imageAlt={"Umuntu homepage displayed on laptop and mobile"} imageWidth={3400} imageHeight={3000}/>
   
      <OverviewSection
          overviewSummary={"A platform that allows users to be able to connect with the social and political life of their countries back home, empowering their voices, as well as contributing to their communities of origin. I used the double diamond approach for this project, as there were a lot of elements within the brief and I wanted to keep the project focused."} 
          roleTitle={"Role: Product Design (UX & UI)"} 
          roleText={"UX design, research & user testing, UI design of responsive web platform, high-fidelity prototyping"} 
          teamText={"Natalie Waites (solo project)"} 
          designText={"Figma, FigJam, Pitch, Speak Ai, Google Forms, Survey Swap, Slack, Adobe Photoshop and Illustrator"} 
          successOne={"100 Subscribers in first 3 months"}
          successTwo={"Web platform design that meets user's basic needs"}
          successThree={"The product addresses user painpoints from research"}
        />
        <div className={styles.mainProject}>
          <Image className={styles.onlyImg} src="/images/umuntu/hero-img.png" alt="Umuntu homescreen on laptop and iphone mockup screens" width={4500} height={2700}/>
          <TitleSection title={"The Brief"} information={"The initial brief was quite broad: 'A platform that empowers the African diaspora to engage with and impact the socio-political landscape of African countries through news, policy tracking, funding, and advocacy. Focused on developing a web platform with these functionalities.' After interviewing the client we agreed to define the brief further by understanding more about the business and conducting target user research."}/>
          <ImageSection imgTitle={"Understanding the business: Lean canvas and competitor analysis"} imageSource={"/images/umuntu/Umuntu-lean-canvas.png"} imageAlt={"Lean canvas diagram for Umuntu business"} imageWidth={7072} imageHeight={5384}/>
          <Image className={styles.onlyImg} src="/images/umuntu/Umuntu-competitor.png" alt="Competitor analysis for Umuntu business" width={7776} height={6690}/>
          <TitleSection title={"User Survey Results"} information={"Once I understood more about the business, I felt it was important to get out a target user survey to understand the market, get initial feedback on the problems presented and how user's currently solve them. For this project in particular it was important for me to allow the product to be driven by the target audience and their experience."}/>
          <div className={styles.stats}>
            <h3>The user survey guided the product direction and decision making</h3>
            <Image className={styles.onlyImg} src="/images/umuntu/mobile-first-stats.png" alt="Pie chart showing users prefer using mobile by 75%" width={2760} height={1552}/>
            <Image className={styles.onlyImg} src="/images/umuntu/important-to-users.png" alt="Bar-chart showing top three features important to user's" width={2760} height={1554}/>
            <Image className={styles.onlyImg} src="/images/umuntu/feature-info.png" alt="Bar-chart showing what features would put users off" width={2760} height={1552}/>
            <p>Based on the user survey results, we decided to take a mobile-first design approach and incorporate the top three things important to users. Finally, being aware of what would put target users off the product was crutial in order to acquire the first 100 subscribers. More questions in the survey gave us insights but these are the top three.</p>
          </div>
          <TitleSection title={"User Interviews"} information={"I was able to arrange a more in-depth interview with three people who participated in the survey. This was super valuable to the project as not only did I receive more information on the problem and their solutions but I was able to listen to their experience and understand the bigger picture. It was important for me to empathise and understand the situation user's were in as best I could to build a product that would suit them."}/>
          <ImageSection imgTitle={"Key quotes from the interviews and affinity map of everything discussed"} imageSource={"/images/umuntu/user-quotes.png"} imageAlt={"Quotes from user interview"} imageWidth={2760} imageHeight={1552}/>  
          <Image className={styles.onlyImg} src="/images/umuntu/Umuntu-affinityMap.png" alt="Affinity map for the three user interviews" width={14306} height={9818}/>
          <TitleSection title={"Defining Interview Information"} information={"From the affinity map, I was able to pull out the key themes discussed and would later use these to form the How Might We statements. I then made an experience map to understand the problems faced by user's and how they played out. I plotted where Umuntu could fit in that experience."}/>
          <ImageSection imageSource={"/images/umuntu/key-themes.png"} imageAlt={"Key themes from the user interviews"} imageWidth={2754} imageHeight={1552}/>
          <Image className={styles.onlyImg} src="/images/umuntu/Umuntu-experience-map.png" alt="Experience map for users" width={6976} height={4396}/>
          <TitleSection title={"Design Ideation"} information={"Going into the design stages I wanted to make sure I was clear on the key opportunities that Umuntu could fill in this space. From there I was able to build three 'How Might We' statements in order to direct the design process and use them to support ideation"}/>
          <ImageSection imageSource={"/images/umuntu/opportunities.png"} imageAlt={"Opportunites indetified for Umuntu"} imageWidth={2758} imageHeight={1554}/>
          <Image className={styles.onlyImg} src="/images/umuntu/HMW.png" alt="How Might We statements for Umuntu" width={2758} height={1554}/>

          <TitleSection title={"Initial Design Stage"} information={"Going into the design stages I wanted to make sure I was clear on the key opportunities that Umuntu could fill in this space. From there I was able to build three 'How Might We' statements in order to direct the design process and use them to support ideation"}/>
          <ImageSection imageSource={"/images/umuntu/opportunities.png"} imageAlt={"Opportunites indetified for Umuntu"} imageWidth={2758} imageHeight={1554}/>
          <Image className={styles.onlyImg} src="/images/umuntu/HMW.png" alt="How Might We statements for Umuntu" width={2758} height={1554}/>
          



          <div className={styles.finalSection}>
            <Image className={styles.onlyImg} src="/images/finchair/Homepages.png" alt="Five homepage screenshots of the finchair app final designs" width={6000} height={3500}/> 
            <Image className={styles.onlyImg} src="/images/finchair/3-iphone-blue.png" alt="Three screenshots of the finchair app final desgins, the wallet, bills and rewards pages" width={4500} height={2800}/>
            <Image className={styles.onlyImg} src="/images/finchair/Finchair-3-screen.png" alt="Three screenshots of the finchair app rewards function final designs" width={4500} height={2800}/>
          </div>  
          <ReviewSection 
            textOne={(
              <>
                <p>The designs fit to the success metrics, particularly the high-fidelity prototype worked for acquiring users as well as seed funding investment.</p>
                <p>The client was happy with gamification of the rewards section and believed this would entice new users as well as keep them engaged.</p>
                <p>Our team worked well together. We used a combination of zoom calls, joint FigJam boards, and Figma comments. </p>
              </>
            )}
            textTwo={(
              <>
                <p>If we had more say in the UX, I would’ve liked to look at how we could adapt the UX/UI to better suit the success metric of acquiring 5,000 users in the first year. As we could look at incorporating referral schemes or onboarding screens that were tested on users to better achieve this result.</p>
                <p>In this project, I learnt the importance of well tested UX and wireframes before defining the UI designs and not jumping to UI too early.</p>
              </>
            )}
          />
          <CasestudyBanner/>
          </div>
    </main>
  )
}
