import AboutSection from '@/components/pages/AboutSection'
import HeroSection from '@/components/pages/HeroSection'
import ProjectSection from '@/components/pages/ProjectSection'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
    </>
  )
}
