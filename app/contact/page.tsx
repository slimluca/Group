import { EditorialPage } from "@/components/EditorialPage";
import { ContactForm } from "@/components/ContactForm";
import { pages } from "@/data/content";
import { pageMetadata } from "@/lib/metadata";

const page = pages.contact;
export const metadata = pageMetadata(page.title, page.description, page.slug);
export default function Page() {
  return (
    <>
      <EditorialPage page={page} />
      <section className="section editorial">
        <div className="shell split">
          <div>
            <p className="eyebrow">Contact form</p>
            <h2>Send a clear platform enquiry.</h2>
            <p>Use this form for general enquiries, corrections, country suggestions, partnership notes, media requests, or technical issues. Delivery requires the site owner to configure the email provider in the deployment environment.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
