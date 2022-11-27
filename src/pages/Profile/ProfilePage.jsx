import React, { useEffect } from "react";
import styles from "./ProfilePage.module.css";
import AppHeader from "../../components/AppHeader/AppHeader";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import ProfileNavigationLinks from "../../components/ProfileNavigationLinks/ProfileNavigationLinks";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import PropTypes from "prop-types";

const ProfilePage = ({ auth }) => {
  useEffect(() => {
    auth();
  }, []);
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

ProfilePage.propTypes = {
  auth: PropTypes.func.isRequired,
};

export default ProfilePage;
