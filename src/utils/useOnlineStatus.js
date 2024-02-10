import { useState, useEffect } from "react"

const useOnlineStatus = () => {
  const [onlineStatus, setOnlinStatus] = useState(true);


  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlinStatus(false);
    })

    window.addEventListener("online", () => {
      setOnlinStatus(false);
    })
  }, [])

  return onlineStatus;
}

export default useOnlineStatus;