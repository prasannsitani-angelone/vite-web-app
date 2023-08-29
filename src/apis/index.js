export const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3001/")
    // const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    return response.json()
  } catch (error) {}
}
