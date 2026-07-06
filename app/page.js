import { homepageHtml } from './homepageHtml';
import SiteScripts from './SiteScripts';

export default function Home() {
  return (
    <>
      <div id="site-root" dangerouslySetInnerHTML={{ __html: homepageHtml }} />
      <SiteScripts />
    </>
  );
}