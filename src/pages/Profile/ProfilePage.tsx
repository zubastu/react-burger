import React, { FC, useEffect } from "react";
import styles from "./ProfilePage.module.css";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import ProfileNavigationLinks from "../../components/ProfileNavigationLinks/ProfileNavigationLinks";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import { checkAuth } from "../../services/asyncActions/auth";
import { useDispatch, useSelector } from "react-redux";
import { TStore } from "../../types";

const ProfilePage: FC = () => {
  const dispatch = useDispatch();
  const { isLogged } = useSelector((store: TStore) => store.login);
  useEffect(() => {
    checkAuth(isLogged)(dispatch);
  }, []);

  return (
    <div className={styles.content}>
      <ProfileNavigationLinks />
      <PageContentContainer>
        <ProfileForm />
      </PageContentContainer>
    </div>
  );
};

export default ProfilePage;
