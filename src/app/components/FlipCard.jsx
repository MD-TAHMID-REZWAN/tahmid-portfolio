'use client'

import { useState } from 'react'
import Image from 'next/image'

const FlipCard = ({ achievement }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const useImage = Boolean(achievement.image)

  const getGradient = (bg) => {
    if (!bg) return 'linear-gradient(to bottom, #1e293b, #0f172a)'
    const [from, to] = bg.replace('from-', '').replace('to-', '').split(' ')
    return `linear-gradient(to bottom, ${from}, ${to})`
  }

  return (
    <div
      className="h-72 w-full"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="relative w-full h-full [perspective:1000px]">
        <div
          className={`relative rounded-xl shadow-lg shadow-black w-full h-full transition-transform duration-700 transform ${isFlipped ? 'rotate-y-180' : ''
            }`}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Front Side */}
          <div
            className={`absolute w-full h-full rounded-xl overflow-hidden`}
            style={{ backfaceVisibility: 'hidden' }}
          >
            {useImage ? (
              <Image
                src={achievement.image}
                alt={achievement.title}
                fill
                className="object-cover"
              />
            ) : (
              <div
                className="flex flex-col items-center justify-center w-full h-full p-6 text-white text-center"
                style={{
                  background: getGradient(achievement.bgGradient),
                }}
              >
                <div className="text-5xl mb-4">{achievement.graphic || '🎓'}</div>
                <h3 className="text-xl font-semibold">{achievement.title}</h3>
                <p className="text-sm mt-2 opacity-80">{achievement.period}</p>
              </div>
            )}
          </div>

          {/* Back Side */}
          <div
            className="absolute w-full h-full rounded-xl p-6 flex flex-col items-center justify-center transform rotate-y-180 text-white"
            style={{
              backfaceVisibility: 'hidden',
              background: getGradient(achievement.bgGradient),
            }}
          >
            <h3 className="text-2xl font-bold mb-2 text-center drop-shadow-sm">
              {achievement.title}
            </h3>
            <p className="text-sm font-medium mb-3 opacity-90">{achievement.period}</p>
            <p className="text-sm text-center opacity-80 leading-relaxed">
              {achievement.description}
            </p>
            <a
              href={achievement.pdf || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-blue-600 hover:underline flex items-center gap-2"
            >
              {achievement.title}
              {achievement.pdf && <span className="text-sm text-gray-400">(PDF)</span>}
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
