import React, { useEffect } from "react";
import styles from "./ProfilePage.module.css";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import ProfileNavigationLinks from "../../components/ProfileNavigationLinks/ProfileNavigationLinks";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import { checkAuth } from "../../services/asyncActions/auth";
import { useDispatch, useSelector } from "react-redux";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { isLogged } = useSelector((store) => store.login);
  useEffect(() => {
    dispatch(checkAuth(isLogged));
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
