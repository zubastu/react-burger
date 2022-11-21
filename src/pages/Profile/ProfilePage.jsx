import React from "react";
import styles from "./ProfilePage.module.css";
import AppHeader from "../../components/AppHeader/AppHeader";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import ProfileNavigationLinks from "../../components/ProfileNavigationLinks/ProfileNavigationLinks";
import ProfileForm from "../../components/ProfileForm/ProfileForm";

const ProfilePage = () => {
  return (
    <>
      <AppHeader />
      <div className={styles.content}>
        <ProfileNavigationLinks />
        <PageContentContainer>
          <ProfileForm />
        </PageContentContainer>
      </div>
    </>
  );
};

export default ProfilePage;
