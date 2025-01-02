import { Card } from '~/components/Card'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { SKILLS } from '~/const/skills'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="container mx-auto grow px-4 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map(skill => (
            <Card
              key={skill.title}
              title={skill.title}
              imageUrl={skill.imageUrl}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
