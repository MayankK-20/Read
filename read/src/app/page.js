"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="text-center px-6">
      <div className="flex flex-col items-center min-h-screen text-center">
        <img src="/logo.png" alt="Logo" className="w-32 h-32 rounded-lg" />
        <h1 className="text-4xl font-bold">Welcome to MyReader</h1>
        <p className="text-lg text-gray-300 mb-6">
          Discover and read your favorite novels and manga, all in one place.
        </p>
      </div>
        <div className="flex justify-center gap-4">
          <Link href="/novels" className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg">
            Explore Novels
          </Link>
          <Link href="/manga" className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg">
            Explore Manga
          </Link>
        </div>
      </section>

      {/* Browse Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6">
        {/* Novels */}
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-2">📚 Novels</h2>
          <p className="text-gray-400 mb-4">Dive into a world of stories.</p>
          <Link href="/novels" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg">
            Browse Novels
          </Link>
        </div>

        {/* Manga */}
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-2">🖼️ Manga</h2>
          <p className="text-gray-400 mb-4">Read the best mangas and webtoons.</p>
          <Link href="/manga" className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg">
            Browse Manga
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12">
        <p className="text-lg text-gray-300">Want to save your progress?</p>
        <Link href="/login" className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg mt-2 inline-block">
          Sign In / Register
        </Link>
      </section>
    </main>
  );
}
