import { TabPage } from "@/components/tabpage/TabPage";
import NavRoutes from "@/data/navRoutes";

const sectionName = "Experience";
const sectionBaseHref = "/experience";

const navRoutes = new NavRoutes();

const tabs = navRoutes.getSectionRoutes(sectionBaseHref);

export default async function Page({
  params,
}: {
  params: Promise<{ tab: string }>;
}) {
  const { tab } = await params;
  if (!tab) {
    return <div>Loading...</div>;
  }
  return (
    <TabPage
      sectionTitle={sectionName}
      ariaLabel="experience tabs"
      tabs={tabs}
      currentTab={tab}
    />
  );
}

export const generateStaticParams = async () =>
  tabs.map((tab) => {
    return { tab: tab.info.title.replace(`${sectionBaseHref}/`, "") };
  });
