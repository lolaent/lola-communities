import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

/**
 * Get list of content based on the content collection name.
 *
 * @param collectionName
 * @returns {*}
 */
export function getContentCollection(collectionName) {
  return getContentSlugs(collectionName).map((slug) => ({
    slug,
    ...getContentBySlug(collectionName, slug),
  }));
}

/**
 * Get list of content slugs from a collection.
 *
 * @param collectionName
 * @returns {*}
 */
export function getContentSlugs(collectionName) {
  const contentDir = join(process.cwd(), 'content', collectionName);
  const slugs = fs.readdirSync(contentDir);
  return slugs.map((s) => s.replace(/\.md$/, ''));
}

/**
 * Get content by slug from a collection.
 *
 * @param collectionName
 * @param slug
 * @returns {{data: *, content: *}}
 */
export function getContentBySlug(collectionName, slug) {
  const contentDir = join(process.cwd(), 'content', collectionName);
  const fullPath = join(contentDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
}
