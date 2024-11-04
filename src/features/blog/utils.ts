import slugify from "slugify";

export const getPostSlug = (post: { title: string; id: number }) => {
    return `${slugify(post.title, { lower: true })}_${post.id}`;
}