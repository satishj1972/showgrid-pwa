import { Button, Card, Badge } from '@/components/ui';
import { PageContainer } from '@/components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="py-12 md:py-20 text-center">
        <Badge variant="live" className="mb-4">Season 1 Live</Badge>
        <h1 className="text-3xl md:text-5xl font-sora font-bold mb-4">
          <span className="bg-gradient-to-r from-violet-core to-electric-blue bg-clip-text text-transparent">
            Two Worlds. One Grid.
          </span>
        </h1>
        <p className="text-soft-grey text-lg md:text-xl max-w-2xl mx-auto mb-8">
          India&apos;s premier creative challenge platform where creativity is rated, ranked, and recognized fairly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/watch">
            <Button size="lg">Watch Performances</Button>
          </Link>
          <Link href="/studio/upload">
            <Button variant="secondary" size="lg">Upload Your Entry</Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 grid md:grid-cols-3 gap-6">
        <Card variant="glow">
          <div className="text-violet-core mb-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 className="font-sora font-semibold text-lg mb-2">Watch & Rate</h3>
          <p className="text-soft-grey text-sm">
            Watch performances and rate them fairly. Your ratings shape the leaderboard.
          </p>
        </Card>

        <Card variant="glow">
          <div className="text-electric-blue mb-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="font-sora font-semibold text-lg mb-2">Live Leaderboard</h3>
          <p className="text-soft-grey text-sm">
            Real-time rankings based on crowd ratings. No popularity bias.
          </p>
        </Card>

        <Card variant="glow">
          <div className="text-pulse-gold mb-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
          <h3 className="font-sora font-semibold text-lg mb-2">Win Rewards</h3>
          <p className="text-soft-grey text-sm">
            Top performers win prizes. Talent gets recognized, not just popularity.
          </p>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center">
        <Card variant="elevated" className="max-w-xl mx-auto">
          <h2 className="font-sora font-semibold text-xl mb-2">Ready to compete?</h2>
          <p className="text-soft-grey mb-4">
            Download the official music hook and submit your performance.
          </p>
          <Link href="/challenge">
            <Button>View Challenge Details</Button>
          </Link>
        </Card>
      </section>
    </PageContainer>
  );
}
