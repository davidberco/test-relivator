import { getAllTags } from "~/lib/wordpress";
import { Metadata } from "next";
import BackButton from "~/ui/components/back";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Tags",
  description: "Browse all tags of our blog posts",
  alternates: {
    canonical: "/posts/tags",
  },
};

export default async function Page() {
  const tags = await getAllTags();

  return (
    <div>
      <div className="space-y-6">
        <div className="mb-8">
          <h2>All Tags</h2>
          <ul className="grid">
            {tags.map((tag: any) => (
              <li key={tag.id}>
                <Link href={`/posts/?tag=${tag.id}`}>{tag.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <BackButton />
      </div>
    </div>
  );
}
