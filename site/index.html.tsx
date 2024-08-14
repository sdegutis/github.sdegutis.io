import { articles } from "./article.js";
import { Page } from "./page.js";

export default <Page title="Blog">
  <ul>
    {articles.map(article => <>
      <li>{article.date} - <a href={article.path}>{article.title}</a></li>
    </>)}
  </ul>
</Page>;
