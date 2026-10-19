import { pageMetadata } from "../lib/seo";
import ContactPage from "./ContactPage";

export const metadata = pageMetadata("/contact");

export default function Page() {
  return <ContactPage />;
}
