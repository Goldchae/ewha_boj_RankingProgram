import { useRouter } from "next/router";

export async function getStaticPaths() {
  // 예시 데이터: 실제 데이터 소스(API, 파일, DB 등)에서 가져올 수 있습니다.
  const paths = [
    { params: { slug: "post-1" } },
    { params: { slug: "post-2" } },
    { params: { slug: "post-3" } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // 실제 데이터 소스(API, 파일, DB 등)에서 데이터 가져오기
  const data = {
    "post-1": { title: "Post 1", content: "This is the content of Post 1." },
    "post-2": { title: "Post 2", content: "This is the content of Post 2." },
    "post-3": { title: "Post 3", content: "This is the content of Post 3." },
  };

  return {
    props: {
      post: data[params.slug] || null,
    },
  };
}

const Post = ({ post }) => {
  const router = useRouter();

  // 페이지가 빌드 타임에 존재하지 않으면 404 페이지를 표시
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
