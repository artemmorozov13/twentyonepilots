import Header from "components/header/Header";
import UserInfo from "components/userInfo/UserInfo";
import UserInfoMajor from "components/userInfoMajor/UserInfoMajor";
import UserInfoPosts from "components/userInfoPosts/UserInfoPosts";
import UserInfoPublications from "components/userInfoPublications/UserInfoPublications";

const User = () => {
  return (
    <>
      <Header />
      <UserInfo>
        <UserInfoMajor />
        <UserInfoPosts />
        <UserInfoPublications />
      </UserInfo>
    </>
  );
};

export default User;
