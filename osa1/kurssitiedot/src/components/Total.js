const Total = ({ parts }) => {
    const number = parts[0].exercises
                    + parts[1].exercises
                    + parts[2].exercises
    return (
      <p>
        Number of exercises {number}
      </p>
    )
}

export default Total