function Blog({ content }) {
  return <div>{JSON.stringify(content)}</div>;
}

export async function getStaticProps(ctx) {
  return {
    props: {
        content: "hello world"
    }    
  };
}

export async function getStaticPaths(ctx) {
  return {
    paths: [
        { params: {
            slug: "test"
        }}
    ],
    fallback: true, // false or 'blocking'
  };
}

export default Blog;
