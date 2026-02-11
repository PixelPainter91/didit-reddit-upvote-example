import { PostList } from "../components/PostList";

export default async function Home({ searchParams }) {
  const params = await searchParams; 
  return <PostList searchParams={params} />;
}