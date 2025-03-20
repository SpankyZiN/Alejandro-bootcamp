const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const friends = ['Mauri', ' ', 'Martin']
  return (
    <div>
      <p>{friends}</p>
    </div>
  )
  // const friends =[
  //   {name: 'Mauri', age: 20},
  //   {name: 'Martin', age: 20},
  // ]
  // return (
  //   <div>
  //     <p>{friends[0].name} {friends[0].age}</p>
  //     <p>{friends[1].name} {friends[1].age}</p>
  //   </div>
  // )
}

export default App