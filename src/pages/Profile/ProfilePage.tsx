import React, { FC } from "react";
import styles from "./ProfilePage.module.css";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import ProfileNavigationLinks from "../../components/ProfileNavigationLinks/ProfileNavigationLinks";
import ProfileForm from "../../components/ProfileForm/ProfileForm";

const ProfilePage: FC = () => {
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
