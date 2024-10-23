import styles from './page.module.css'
import ProjectHeader from '@/components/ProjectHeader'
import ExperimentSection from '@/components/ExperimentSection'

export const metadata = {
  title: 'Experiments | Natalie Waites'
}

export default function ExperimentsPage() {
  return (
    <main className={styles.main}>
      <ProjectHeader projectName={"Experiments"} projectDescription={"Throughout my life I've loved playing around with my design skills in various different mediums."}  imageSource={"/images/experiments/hero-experiments.png"} imageAlt={"Coding project on laptop and mobile mock up"} imageWidth={3264} imageHeight={3500}/>
      <ExperimentSection title={"Fashion Design & Construction"} /> 
      
      <div className={styles.uni}>

      </div>
    </main>
  )
}