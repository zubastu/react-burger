import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers";
import {
  webSocketMiddleware,
  WSActions,
} from "../middlewares/webSocketMiddleware";

import { WSActionsOrdersAll } from "../actions/wsOrdersActions";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      webSocketMiddleware(WSActionsOrdersAll as WSActions)
    ),
});

export { store };
