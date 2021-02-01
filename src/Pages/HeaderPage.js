import React, { Children, useContext, useState } from 'react'
import { GlobalContext } from '../context'
import { Header } from '../components';

function HeaderPage() {
  const [description, setDescription] = useState('')
  const { dispatch, state, handleSearchHeader } = useContext(GlobalContext)

  function handleHeaderSearch(e) {
    e.preventDefault()
    const el = e.target.inputValue.value
    setDescription(el)
    handleSearchHeader(el)
    e.target.reset()
  }

  return (
    <Header>
      <Header.Form onSubmit={handleHeaderSearch}>
        <Header.Input
          type="text"
          name="inputValue"
          placeholder="Titles, companies, expertise or benefits"
        />
        <Header.Button type="submit">Search</Header.Button>
      </Header.Form>
    </Header>
  )
}

export default HeaderPage
