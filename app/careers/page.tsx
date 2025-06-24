import type { Metadata } from "next"
import CareersPageClient from "./CareersPageClient"

export const metadata: Metadata = {
  title: "Careers & Jobs | Join EliteCrows Infotech Team | Remote & Onsite Opportunities",
  description:
    "Join EliteCrows Infotech team! Exciting career opportunities in software development, AI/ML, cloud computing, cybersecurity. Remote and onsite positions available.",
  keywords:
    "careers, jobs, software developer jobs, AI ML engineer, cloud engineer, cybersecurity jobs, remote work, EliteCrows careers, tech jobs India",
  openGraph: {
    title: "Careers & Jobs | EliteCrows Infotech",
    description:
      "Join our innovative team! Exciting opportunities in software development, AI/ML, cloud computing, and cybersecurity.",
    url: "https://www.elitecrows.com/careers",
  },
}

export default function CareersPage() {
  return <CareersPageClient />
}
