import { useState } from 'react'
import { questions } from './questions'
import { QuestionCard } from './components/QuestionCard'
import { ProgressBar } from './components/ProgressBar'
import { Result } from './components/Result'
import { Onboarding } from './components/Onboarding'
import './App.css'

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [isComplete, setIsComplete] = useState(false)
  const [showOnboarding, setShowOnboarding] = useState(true)

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsComplete(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setIsComplete(false)
  }

  if (showOnboarding) {
    return <Onboarding onStart={() => setShowOnboarding(false)} />
  }

  if (!isComplete) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="w-full">
          <ProgressBar currentQuestion={currentQuestion} />
          <QuestionCard 
            question={questions[currentQuestion]} 
            onAnswer={handleAnswer} 
          />
          <img
            src={
              currentQuestion === 10
                ? "/assets/government.png"
                : currentQuestion === 9
                ? "/assets/legal.png"
                : currentQuestion === 8
                ? "/assets/nohate.png"
                : currentQuestion === 7
                ? "/assets/basic income.png"
                : currentQuestion === 6
                ? "/assets/7.png"
                : currentQuestion === 5
                ? "/assets/6.png"
                : currentQuestion === 4
                ? "/assets/5.png"
                : currentQuestion === 3
                ? "/assets/4.png"
                : currentQuestion === 2
                ? "/assets/3.png"
                : currentQuestion === 1
                ? "/assets/distribution.png"
                : "/assets/soldier.png"
            }
            alt="illustration"
            className="mt-6 w-full rounded-lg shadow-sm"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full">
        <Result answers={answers} onRestart={handleRestart} />
      </div>
    </div>
  )
}
