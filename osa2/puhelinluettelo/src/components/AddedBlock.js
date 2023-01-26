const AddedBlock = ({ text }) => {
  if (text === null) {
    return null
  }

  return (
    <div className={success}>
      {text}
    </div>
  )
}

export default AddedBlock