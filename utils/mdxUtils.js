import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // Library to parse frontmatter
import { parseISO, format } from 'date-fns';

export const POSTS_PATH = path.join(process.cwd(), 'posts');

// Function to extract date from MDX frontmatter
const extractDateFromFrontmatter = (content) => {
  const { data } = matter(content);
  return data.date || ''; // Assuming 'date' is the field containing the date
};

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((fileName) => /\.mdx?$/.test(fileName))
  // Sort posts by date
  .sort((fileNameA, fileNameB) => {
    const contentA = fs.readFileSync(path.join(POSTS_PATH, fileNameA), 'utf8');
    const contentB = fs.readFileSync(path.join(POSTS_PATH, fileNameB), 'utf8');
    const dateA = parseISO(extractDateFromFrontmatter(contentA));
    const dateB = parseISO(extractDateFromFrontmatter(contentB));
    return dateB - dateA; // Sort in descending order (most recent first)
  });
