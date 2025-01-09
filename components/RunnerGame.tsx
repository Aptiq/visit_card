"use client"

import React, { useEffect, useRef, useState, useCallback } from 'react'

export const RunnerGame = () => {
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const characterRef = useRef<HTMLDivElement>(null)
  const obstacleRef = useRef<HTMLDivElement>(null)
  const gameRef = useRef<HTMLDivElement>(null)
  const [isJumping, setIsJumping] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(2)

  const jump = useCallback(() => {
    if (!isJumping && !gameOver && isPlaying) {
      setIsJumping(true)
      setTimeout(() => setIsJumping(false), 500)
    }
  }, [isJumping, gameOver, isPlaying])

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault()
        jump()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [jump])

  useEffect(() => {
    if (isPlaying && !gameOver) {
      const difficultyInterval = setInterval(() => {
        setSpeed(prev => Math.max(prev * 0.95, 0.8))
      }, 5000)

      return () => clearInterval(difficultyInterval)
    }
  }, [isPlaying, gameOver])

  useEffect(() => {
    if (!gameOver && isPlaying) {
      const checkCollision = () => {
        if (!characterRef.current || !obstacleRef.current) return

        const characterRect = characterRef.current.getBoundingClientRect()
        const obstacleRect = obstacleRef.current.getBoundingClientRect()

        const collisionMargin = 10
        const collision = 
          characterRect.right - collisionMargin > obstacleRect.left &&
          characterRect.left + collisionMargin < obstacleRect.right &&
          characterRect.bottom > obstacleRect.top &&
          !isJumping

        if (collision) {
          setGameOver(true)
          setIsPlaying(false)
        }
      }

      const gameLoop = setInterval(() => {
        checkCollision()
        setScore(prev => prev + 1)
      }, 10)

      return () => clearInterval(gameLoop)
    }
  }, [gameOver, isJumping, isPlaying])

  const startGame = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsPlaying(true)
    setGameOver(false)
    setScore(0)
    setSpeed(2)
    if (obstacleRef.current) {
      obstacleRef.current.style.animation = `moveLeft ${speed}s infinite linear`
    }
  }

  const resetGame = (e: React.MouseEvent) => {
    e.stopPropagation()
    setGameOver(false)
    setScore(0)
    setIsPlaying(false)
    setSpeed(2)
    if (obstacleRef.current) {
      obstacleRef.current.style.animation = 'none'
    }
  }

  return (
    <div 
      ref={gameRef}
      className="relative h-40 w-full bg-muted/50 rounded-xl overflow-hidden cursor-pointer select-none"
      onClick={jump}
    >
      <style jsx>{`
        @keyframes moveLeft {
          from {
            left: 100%;
          }
          to {
            left: -20%;
          }
        }
      `}</style>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20" />
      
      <div 
        ref={characterRef}
        className={`absolute bottom-2 left-[20%] w-6 h-8 bg-primary transition-transform duration-500 ${
          isJumping ? 'translate-y-[-60px]' : ''
        }`}
      />
      
      <div 
        ref={obstacleRef}
        className="absolute bottom-2 w-6 h-6 bg-destructive"
        style={{
          animation: isPlaying ? `moveLeft ${speed}s infinite linear` : 'none',
          left: !isPlaying ? '100%' : undefined
        }}
      />
      
      <div className="absolute top-4 right-4 font-mono">
        Score: {Math.floor(score/10)}
      </div>
      
      {!isPlaying && !gameOver && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center">
            <button 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
              onClick={startGame}
            >
              Start Game
            </button>
          </div>
        </div>
      )}
      
      {gameOver && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white text-xl mb-2">Game Over!</p>
            <p className="text-white mb-4">Score: {Math.floor(score/10)}</p>
            <button 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
              onClick={resetGame}
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 