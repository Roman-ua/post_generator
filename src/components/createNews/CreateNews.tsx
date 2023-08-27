import { useState } from 'react'
import CreateNewsResultBlock from './CreateNewsResult.tsx'
import CreateNewsForm from './CreateNewsForm.tsx'

const CreateNews = () => {
  const [imageState, setImageState] = useState('')

  return (
    <div className="flex flex-col mt-10">
      <CreateNewsForm setImageState={setImageState} />
      <CreateNewsResultBlock imageState={imageState} />
    </div>
  )
}

export default CreateNews
