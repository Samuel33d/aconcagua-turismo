import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ModalidadesSection from '@/components/ModalidadesSection'
import ServicesSection from '@/components/ServicesSection'
import NosotrosSection from '@/components/NosotrosSection'
import ComoFuncionaSection from '@/components/ComoFuncionaSection'
import DestinosSection from '@/components/DestinosSection'
import FlotaSection from '@/components/FlotaSection'
import ArtistasSection from '@/components/ArtistasSection'
import GaleriaSection from '@/components/GaleriaSection'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ModalidadesSection />
        <ServicesSection />
        <NosotrosSection />
        <ComoFuncionaSection />
        <DestinosSection />
        <FlotaSection />
        <ArtistasSection />
        <GaleriaSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
