const SuccessBlock = ({ text, error }) => {
  if (text === null) {
    return null
  }
  const classi = error ? "error" : "success"
  
  return (
    <div className={classi}>
      {text}
    </div>
  )
}

export default SuccessBlock