import { useState } from "react";

export const useSearchForm = (callback: Function) => {
  const [inputs, setInputs] = useState({})

  const handleSubmit = (event: any) => {
    if (event) {
      event.preventDefault()
    }
    callback(inputs)
  }

  const handleInputChange = (event: any) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}))
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs
  }
}
