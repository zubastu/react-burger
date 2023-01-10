import React, { useEffect } from "react";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import { useAppDispatch } from "../../utils/constants";
import {
  WS_ORDERS_CONNECTION_CLOSED,
  WS_ORDERS_CONNECTION_SUCCESS,
} from "../../services/actions/wsOrdersActions";

const Feed = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({ type: WS_ORDERS_CONNECTION_SUCCESS });
    return () => {
      dispatch({ type: WS_ORDERS_CONNECTION_CLOSED });
    };
  }, []);

  return <PageContentContainer>{}</PageContentContainer>;
};

export default Feed;
