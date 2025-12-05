import { BlogPosts } from "app/components/posts";

export default function Page() {
  const description = `I'm a software engineer specializing in building full stack web applications and some experience in mobile app development.
  This is my blog where I share my thoughts on software development, programming languages, frameworks, and my personal projects.
  Feel free to explore my posts and reach out if you'd like to connect!`;

  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">About me</h1>
      <p className="mb-4">{description}</p>
      <div className="my-4">
        <h2 className="mb-4 text-2xl font-semibold">Latest Posts</h2>
        <BlogPosts />
      </div>
    </section>
  );
}
