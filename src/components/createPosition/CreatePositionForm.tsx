import imgGenerator from '../../utils/imgGenerator.ts'
import { useState } from 'react'

interface Props {
  setImageState: (value: string) => void
}

const CreatePositionForm = ({ setImageState }: Props) => {
  const [companyValue, setCompanyValue] = useState('')
  const [positionValue, setPositionValue] = useState('')
  const [salaryValue, setSalaryValue] = useState('')
  const [locationValue, setLocationValue] = useState('')
  const inputStyle = 'mb-4 p-2 rounded bg-formInput text-textMain outline-none'
  return (
    <div className="flex flex-col border-2 border-textMain p-4 rounded mb-4 bg-bgForm">
      <div className="text-textMain mb-6">Position Generator</div>
      <input
        type="text"
        className={inputStyle}
        placeholder="Company Name"
        value={companyValue}
        onChange={(e) => setCompanyValue(e.target.value)}
      />
      <input
        type="text"
        className={inputStyle}
        placeholder="Position"
        value={positionValue}
        onChange={(e) => setPositionValue(e.target.value)}
      />
      <input
        type="text"
        className={inputStyle}
        placeholder="Salary"
        value={salaryValue}
        onChange={(e) => setSalaryValue(e.target.value)}
      />
      <input
        type="text"
        className={inputStyle}
        placeholder="Location"
        value={locationValue}
        onChange={(e) => setLocationValue(e.target.value)}
      />
      <button
        className="p-4 bg-bgButton rounded text-bgForm"
        onClick={() =>
          imgGenerator(
            companyValue,
            positionValue,
            salaryValue,
            locationValue,
            setImageState
          )
        }
      >
        Generate Post
      </button>
    </div>
  )
}

export default CreatePositionForm
