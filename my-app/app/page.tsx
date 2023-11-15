import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
 <div className="header bg-gray-400 flex justify-center bg-yellow-400">
        <h2 className="title">GRAINE ROYALE SCHOOL</h2>
        <span>181.np run de</span>
        <span className="text-medium flex justify-between">
          <span>phone number</span>
          <span>email</span>
        </span>
      </div>
    </main>
  )
}
