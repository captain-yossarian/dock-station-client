import { createContext, RefObject, useContext } from "react";

interface WsContext {
  isReady: boolean;
  ws: RefObject<WebSocket | null>;
  val: null;
}
export const ws: WsContext = {
  isReady: false,
  ws: { current: null },
  val: null,
};

export const WsContext = createContext(ws);

export const useWebSocket = () => useContext(WsContext);
