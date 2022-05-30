import Header from "components/header/Header";
import Container from "components/container/Container";
import SinglePost from "components/singlePost/SinglePost";
import SinglePostComments from "components/singlePostComments/SinglePostComments";
import AddComment from "components/addComment/AddComment";

const Post = () => {
  return (
    <>
      <Header />
      <Container>
        <SinglePost />
        <SinglePostComments />
        <AddComment />
      </Container>
    </>
  );
};

export default Post;
