import { Button } from '@nextui-org/react'
import axios from 'axios'
import Cookies from 'js-cookie'
export default function ChatPage() {
  const callApi = async () => {
    try {
      const token = Cookies.get('token')
      const response = await axios.post('http://localhost:8080/api/v1/chat', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      console.log(response)

      const responseData = response.data

      alert(responseData.message)
    } catch (error) {
      alert(error)
      console.error(error)
    }
  }

  return (
    <section className="flex justify-center text-center">
      <div className="flex flex-col gap-2">
        <h2>Chat</h2>
        <Button
          color="primary"
          className="font-bold text-white"
          onClick={callApi}
        >
          Call Client API
        </Button>
      </div>
    </section>
  )
}
