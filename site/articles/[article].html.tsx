import { articles } from "../article.js";
import { Page } from "../page.js";

export default articles.map(article => {
  return [article.slug, <Page title={article.title}>
    <div>{article.body}</div>
  </Page>];
});
