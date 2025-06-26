import Link from "next/link"
import { Mic, Music, Disc3, Smile, Megaphone, Wand } from "lucide-react"

const categories = [
  { label: "Singers", icon: <Mic />, query: "singer" },
  { label: "Dancers", icon: <Music />, query: "dancer" },
  { label: "DJs", icon: <Disc3 />, query: "dj" },
  { label: "Comedians", icon: <Smile />, query: "comedian" },
  { label: "Speakers", icon: <Megaphone />, query: "speaker" },
  { label: "Magicians", icon: <Wand />, query: "magician" },
]

export default function CategoryCards() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-4">
      {categories.map(({ label, icon, query }) => (
        <Link
          key={label}
          href={`/artists?category=${query}`}
          className="border p-4 rounded-xl hover:-translate-y-3 transition text-center flex flex-row items-center justify-center gap-2"
        >
          <div className="text-primary">{icon}</div>
          <span className="font-medium text-sm">{label}</span>
        </Link>
      ))}
    </div>
  )
}
