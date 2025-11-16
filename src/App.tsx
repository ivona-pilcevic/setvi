import { Button, Card } from 'antd'
import { useFetchQuotes } from './features/typewriter/hooks/api/useFetchQuotes'
import Loader from './components/common/Loader'
import ErrorMessage from './components/common/ErrorMessage'
import { useState } from 'react'
import { mergeQuotes } from './features/typewriter/utils/mergeQuotes'
import Typewriter from './features/typewriter/components/Typewriter'

function App() {
  const { quotes, isLoadingQuotes, errorFetchingQuotes } = useFetchQuotes()
  const [mergedText, setMergedText] = useState<string>('')
  const [isGenerating, setIsGenerating] = useState<boolean>(false)

  const handleGenerateSummary = () => {
    if (!quotes?.quotes) {
      return
    }
    const combined = mergeQuotes(quotes.quotes)
    setMergedText(combined)
    setIsGenerating(true)
  }

  const handleTypewriterDone = () => {
    setIsGenerating(false)
  }

  if (isLoadingQuotes) return <Loader />
  if (errorFetchingQuotes) return <ErrorMessage description="Error fetching quotes" />
  return (
    <Card>
      <div>
        <Button onClick={handleGenerateSummary} disabled={isGenerating}>
          Generate Summary
        </Button>
        {mergedText && (
          <div>
            <Typewriter text={mergedText} onDone={handleTypewriterDone} />
          </div>
        )}
      </div>
    </Card>
  )
}

export default App
