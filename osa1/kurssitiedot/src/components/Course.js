const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  
  const Part = (props) => {
    return (
      <p>{props.part.name} {props.part.exercises}</p>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
        <Part part={props.parts[0]} />
        <Part part={props.parts[1]} />
        <Part part={props.parts[2]} />
      </div>
    )
  }
  
  const Total = (props) => {
    const number = props.parts[0].exercises
                    + props.parts[1].exercises
                    + props.parts[2].exercises
    return (
      <p>
        Number of exercises {number}
      </p>
    )
  }

  const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
  }

  export default Course