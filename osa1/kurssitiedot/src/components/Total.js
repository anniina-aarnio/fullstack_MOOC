const Total = ({ parts }) => {
  const number = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <h4>
      total of exercises {number}
    </h4>
  )
}

export default Total