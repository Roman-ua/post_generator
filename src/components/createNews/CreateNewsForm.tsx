import { useState } from 'react'
import newsGenerator from '../../utils/newsGenerator.ts'

interface Props {
  setImageState: (value: string) => void
}

const CreateNewsForm = ({ setImageState }: Props) => {
  const [newsTitleValue, setNewsTitleValue] = useState('')

  const inputStyle = 'mb-4 p-2 rounded bg-formInput text-textMain outline-none'
  return (
    <div className="flex flex-col border-2 border-textMain p-4 rounded mb-4 bg-bgForm">
      <div className="text-textMain mb-6">News Generator</div>
      <input
        type="text"
        maxLength={43}
        className={inputStyle}
        placeholder="News Title"
        value={newsTitleValue}
        onChange={(e) => setNewsTitleValue(e.target.value)}
      />

      <button
        className="p-4 bg-bgButton rounded text-bgForm"
        onClick={() => newsGenerator(newsTitleValue, setImageState)}
      >
        Generate News
      </button>
    </div>
  )
}

export default CreateNewsForm
