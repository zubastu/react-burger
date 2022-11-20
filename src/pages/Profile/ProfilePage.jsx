import React from "react";
import AppHeader from "../../components/AppHeader/AppHeader";
import PageContentContainer from "../../components/PageContentContainer/PageContentContainer";
import ProfileNavigationLinks from "../../components/ProfileNavigationLinks/ProfileNavigationLinks";
import ProfileForm from "../../components/ProfileForm/ProfileForm";

const ProfilePage = () => {
  return (
    <>
      <AppHeader />
      <ProfileNavigationLinks />
      <PageContentContainer>
        <ProfileForm />
      </PageContentContainer>
    </>
  );
};

export default ProfilePage;
