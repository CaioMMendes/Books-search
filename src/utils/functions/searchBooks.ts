import axios from "axios"

export async function searchBooks(searchInput: string) {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL!, {
      params: {
        search: searchInput,
      },
    })
    return response.data.data
  } catch (error) {
    console.log(error)
    return null
  }
}
