interface Props {
  imageState: string
}

const CreateNewsResultBlock = ({ imageState }: Props) => {
  return (
    <div className="flex content-center items-center">
      {imageState ? (
        <div className="flex justify-center items-center w-full">
          <img src={imageState} alt="some img" />
        </div>
      ) : (
        <div className="p-2 flex min-h-[400px] justify-center items-center w-full border-2 border-textMain border-dashed rounded">
          Result image
        </div>
      )}
    </div>
  )
}

export default CreateNewsResultBlock
