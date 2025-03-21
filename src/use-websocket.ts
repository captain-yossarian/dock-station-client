import { useEffect, useRef, useState } from "react";

export const useWs = ({ url }: { url: string }) => {
  const [isReady, setIsReady] = useState(false);
  const [val, setVal] = useState(null);

  const ws = useRef<null | WebSocket>(null);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
        console.log('Open!')
        setIsReady(true)
    };
    socket.onclose = () => setIsReady(false);
    socket.onmessage = (event) => setVal(event.data);

    ws.current = socket;

    return () => {
      socket.close();
    };
  }, []);

  // bind is needed to make sure `send` references correct `this`
  return {
    isReady,
    ws,val
  }
};
