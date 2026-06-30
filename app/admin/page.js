import { adminHtml } from '../adminHtml';
import AdminScripts from '../AdminScripts';

export const metadata = { title: 'AVN Admin', robots: { index: false, follow: false } };

export default function Admin() {
  return (
    <div className="bg-light bg-opacity-25">
      <div dangerouslySetInnerHTML={{ __html: adminHtml }} />
      <AdminScripts />
    </div>
  );
}
