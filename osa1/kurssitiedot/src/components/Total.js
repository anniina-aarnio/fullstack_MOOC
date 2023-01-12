const Total = ({ parts }) => {
    const number = parts.reduce((sum, part) => sum + part.exercises, 0)
    
    return (
      <p>
        Number of exercises {number}
      </p>
    )
}

export default Total