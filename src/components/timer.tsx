import React, { useState, useEffect } from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import GradientSVG from '../helpers/gradientSvg'
import Button from './button'
import { colors } from '../helpers/colors'
import Arrow from '../../public/assets/icons/arrow'

const workDuration = 25 * 60
const shortBreakDuration = 5 * 60
const longBreakDuration = 15 * 60

export default function PomodoroTimer() {
  const [isRunning, setIsRunning] = useState(false)
  const [timeLeft, setTimeLeft] = useState(workDuration)
  const [phase, setPhase] = useState('work')
  const [cycleCount, setCycleCount] = useState(0)

  useEffect(() => {
    let interval: any = null

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      handlePhaseChange()
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRunning, timeLeft])

  const toggleTimer = () => {
    setIsRunning(!isRunning)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setTimeLeft(workDuration)
    setPhase('work')
    setCycleCount(0)
  }

  const handlePhaseChange = (next = true) => {
    setIsRunning(false)

    if (next) {
      if (phase === 'work') {
        if (cycleCount === 3) {
          setTimeLeft(longBreakDuration)
          setPhase('longBreak')
          setCycleCount(0)
        } else {
          setTimeLeft(shortBreakDuration)
          setPhase('break')
          setCycleCount((prevCount) => prevCount + 1)
        }
      } else if (phase === 'break') {
        setTimeLeft(workDuration)
        setPhase('work')
      } else {
        setTimeLeft(workDuration)
        setPhase('work')
      }
    } else {
      if (phase === 'longBreak' || (phase === 'break' && cycleCount === 0)) {
        setTimeLeft(workDuration)
        setPhase('work')
        setCycleCount(2)
      } else if (phase === 'break') {
        setTimeLeft(workDuration)
        setPhase('work')
        setCycleCount((prevCount) => prevCount - 1)
      } else {
        setTimeLeft(shortBreakDuration)
        setPhase('break')
      }
    }
  }

  const skipToNextPhase = () => {
    handlePhaseChange(true)
  }

  const skipToPreviousPhase = () => {
    handlePhaseChange(false)
  }

  const formatTimeLeft = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  const percentage =
    (timeLeft / (phase === 'work' ? workDuration : phase === 'break' ? shortBreakDuration : longBreakDuration)) * 100

  return (
    <div className="timer">
      <GradientSVG id="timer-gradient" startColor="#F80EEF" endColor="#FF3D60" rotation={315} />

      <div className="timer-wrapper">
        <CircularProgressbarWithChildren
          value={percentage}
          styles={buildStyles({
            pathColor: phase === 'work' ? 'url(#timer-gradient)' : phase === 'break' ? '#4ec5f1' : '#8e44ad',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        >
          <p className="timer-time" style={{ fontWeight: 'bold', fontSize: '36px' }}>
            {formatTimeLeft(timeLeft)}
          </p>
          <div className="timer-children">
            {/* {phase === 'work' ? <Arrow width={24} height={24} color={colors.black} /> : <Arrow width={24} height={24} color={colors.black} />} */}
            <button className="timer-children-play" onClick={toggleTimer}>
              {isRunning ? 'Pause' : 'Play'}
            </button>
            <button className="timer-children-prev" onClick={skipToPreviousPhase}>
              Previous
            </button>
            <button className="timer-children-next" onClick={skipToNextPhase}>
              Next
            </button>
          </div>
        </CircularProgressbarWithChildren>
        <button className="timer-reset" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  )
}
