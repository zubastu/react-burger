import React, { FC, useEffect } from "react";
import styles from "./ProfilePage.module.css";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import ProfileNavigationLinks from "../../components/ProfileNavigationLinks/ProfileNavigationLinks";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import { checkAuth } from "../../services/asyncActions/auth";
import { TStore } from "../../types";
import { useAppDispatch, useAppSelector } from "../../utils/constants";

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();
  const { isLogged } = useAppSelector((store: TStore) => store.login);

  useEffect(() => {
    dispatch(checkAuth(isLogged));
  }, []);

  return (
    <div className={styles.content}>
      <ProfileNavigationLinks text="В этом разделе вы можете изменить свои персональные данные" />
      <PageContentContainer>
        <ProfileForm />
      </PageContentContainer>
    </div>
  );
};

export default ProfilePage;
