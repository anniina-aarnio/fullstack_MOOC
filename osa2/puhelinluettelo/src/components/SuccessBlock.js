const SuccessBlock = ({ text, error }) => {
  if (text === null) {
    return null
  }

  return (
    <div className={() => error ? "error" : "success"}>
      {text}
    </div>
  )
}

export default SuccessBlock