import React from "react"
import styled from "styled-components"

const SearchButtons = ({ projects, setProjects, setBackToAll}) => {
  const [index, setIndex] = React.useState(0);

  // -------------------------------------------------------
  // Below map is correct, however the console.log(type)
  // return all the values in the tables for a total of 6 items:
  // bedroom, bathroom, bathroom, bathroom, kitchen, kitchen
  // But we would like ony one of each so that we could translate these 
  // values into Buttons

  // const types = projects.map((project) =>{
  //   console.log(types)
  //   return project.data.type
  // })
  // console.log(types)

  // -----------------------------------------------------------
  // In this way we translate the choices into Buttons \
  // via new Set(.......)

    const types = ['all', ...new Set(projects.map((project) =>{
    // console.log(types)
    return project.data.type
  }))]
  // console.log(types)


  const showProjects = (type, typeIndex) => {
    setIndex(typeIndex);
    if(type === "all") {
      setBackToAll();
    } else {
      const tempProject = projects.filter(project => project.data.type === type);
      setProjects(tempProject);
    }
  }


  return (
    <Wrapper>
      {
        types.map((type, typeIndex) => {
          return (
            <button 
              key={typeIndex} 
              className={index === typeIndex ? 'active' : undefined}
              onClick={() => showProjects(type, typeIndex)}  
            >{type}</button>
          )
        })
      }
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  margin-bottom: 0;
  justify-content: center;
  flex-wrap: wrap;
  button {
    margin: 0.5rem;
    text-transform: capitalize;
    background: transparent;
    border: transparent;
    color: var(--clr-grey-6);
    letter-spacing: var(--spacing);
    font-size: 1rem;
    padding: 0.25rem;
    cursor: pointer;
    outline: none;
    transition: var(--transition);
  }
  button:hover,
  button.active {
    box-shadow: 0px 1.5px 0 var(--clr-grey-6);
  }
`
export default SearchButtons
