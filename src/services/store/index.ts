import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers";
import { webSocketMiddleware } from "../middlewares/webSocketMiddleware";
import {
  WS_URL_ORDERS_ALL,
  WS_URL_ORDERS_USER_HISTORY,
} from "../../utils/constants";
import { WSActionsOrdersUserHistory } from "../actions/wsUserHistoryActions";
import { WSActionsOrdersAll } from "../actions/wsOrdersActions";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      webSocketMiddleware(WS_URL_ORDERS_ALL, WSActionsOrdersAll, false),
      webSocketMiddleware(
        WS_URL_ORDERS_USER_HISTORY,
        WSActionsOrdersUserHistory,
        true
      )
    ),
});

export default store;