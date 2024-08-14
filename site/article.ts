import files from './data/';

export const articles = files.map((file) => {
  const contents = file.content.toString('utf8').split(/\r?\n/);
  const title = contents.shift();
  const body = contents.map(s => `<p>${s}</p>`).join('');
  const date = file.path.match(/\d\d\d\d-\d\d-\d\d/)[0];
  const slug = `${date}-${file.path.slice(17, -4)}`;
  const path = `/articles/${slug}.html`;
  return { path, slug, title, body, date };
});
