import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ActivitiesPage from '@/app/activities/page';
import { LegacyActivityLanding } from '@/components/seo/LegacyActivityLanding';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { activitiesForTab } from '@/data/activities';

const EXTREME = 'extreme-adventure';
const ALL_HANDLES = ['all-adventures', 'all'];
const EXTREME_TITLE = 'Extreme';
const EXTREME_HIGHLIGHT = 'adventure';
const EXTREME_DESCRIPTION =
  'Bungee, giant swing, freestyle, rope bungee, zip line, SCAD, and reverse bungee.';
const ACTIVITIES_TITLE = 'Activities';
const ACTIVITIES_DESCRIPTION =
  'Every lane on the Shivpuri strip — extreme drops, aerial park, entertainment arena, kids zone, and VR lab.';

type RouteParams = { params: Promise<{ handle: string }> };

export function generateStaticParams() {
  return [EXTREME, ...ALL_HANDLES].map((handle) => ({ handle }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { handle } = await params;
  const canonical = `${SITE_CONFIG.domain}/collections/${handle}`;

  if (handle === EXTREME) {
    const title = `${EXTREME_TITLE} ${EXTREME_HIGHLIGHT}`;
    return {
      title: { absolute: title },
      description: EXTREME_DESCRIPTION,
      alternates: { canonical },
      openGraph: { title, description: EXTREME_DESCRIPTION, url: canonical, type: 'website' },
    };
  }

  if (ALL_HANDLES.includes(handle)) {
    return {
      title: ACTIVITIES_TITLE,
      description: ACTIVITIES_DESCRIPTION,
      alternates: { canonical },
      openGraph: {
        title: ACTIVITIES_TITLE,
        description: ACTIVITIES_DESCRIPTION,
        url: canonical,
        type: 'website',
      },
    };
  }

  return {};
}

export default async function CollectionPage({ params }: RouteParams) {
  const { handle } = await params;

  if (ALL_HANDLES.includes(handle)) return <ActivitiesPage />;

  if (handle === EXTREME) {
    return (
      <LegacyActivityLanding
        tag="High Adrenaline"
        title={EXTREME_TITLE}
        highlightWord={EXTREME_HIGHLIGHT}
        description={EXTREME_DESCRIPTION}
        activities={activitiesForTab('extreme').slice(0, 6)}
      />
    );
  }

  notFound();
}
