import { LinkSectionItem } from "@/components/navigation/navigationProps";
import { TabPage } from "@/components/tabpage/TabPage";
import { navRoutes } from "@/data/navRoutes";

const sectionName = "Experience";
const sectionBaseHref = "/experience";

const getSectionRoutes = (sectionBaseHref: string) => {
  return navRoutes.reduce((acc, route) => {
    if (route.type === "trigger" && route.sectionBaseHref === sectionBaseHref) {
      acc = acc.concat(route.items);
    }
    return acc;
  }, [] as LinkSectionItem[]);
};

const tabs = getSectionRoutes(sectionBaseHref)
  .filter((item) => item.type === "linkWithSlug" && item.label !== sectionName)
  .map((item) => ({
    label: item.label,
    value: item.href,
    parent: sectionName,
  }));

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
    return { tab: tab.value.replace(`${sectionBaseHref}/`, "") };
  });
