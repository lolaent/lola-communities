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
  const contentDir = join(process.cwd(), 'content', collectionName);

  return getContentSlugs(contentDir).map((slug) => ({
    slug,
    ...getContentBySlug(contentDir, slug),
  }));
}

/**
 * Get list of content slugs from a directory.
 *
 * @param contentDir
 * @returns {*}
 */
export function getContentSlugs(contentDir) {
  const slugs = fs.readdirSync(contentDir);
  return slugs.map((s) => s.replace(/\.md$/, ''));
}

/**
 * Get content by slug from specific directory.
 *
 * @param contentDir
 * @param slug
 * @returns {{data: *, content: *}}
 */
export function getContentBySlug(contentDir, slug) {
  const fullPath = join(contentDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
}
