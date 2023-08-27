import CreatePositionForm from './CreatePositionForm.tsx'
import CreatePositionResultBlock from './CreatePositionResultBlock.tsx'
import { useState } from 'react'

const CreatePosition = () => {
  const [imageState, setImageState] = useState('')

  return (
    <div className="flex flex-col">
      <CreatePositionForm setImageState={setImageState} />
      <CreatePositionResultBlock imageState={imageState} />
    </div>
  )
}

export default CreatePosition
