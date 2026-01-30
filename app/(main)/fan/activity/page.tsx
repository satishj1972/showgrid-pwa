'use client';

import Link from 'next/link';

const activityData = [
  { id: '1', type: 'rating', studioName: 'Nrutya Academy', city: 'Bangalore', score: 9, timestamp: '2 hours ago', thumbnail: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=200' },
  { id: '2', type: 'rating', studioName: 'Urban Drip Studio', city: 'Mumbai', score: 8, timestamp: '5 hours ago', thumbnail: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=200' },
  { id: '3', type: 'badge', badgeName: 'Week Warrior', badgeIcon: 'local_fire_department', timestamp: '1 day ago' },
  { id: '4', type: 'rating', studioName: 'Kings United', city: 'Delhi', score: 10, timestamp: '1 day ago', thumbnail: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=200' },
  { id: '5', type: 'streak', streakDays: 7, timestamp: '1 day ago' },
  { id: '6', type: 'rating', studioName: 'Dance Factory', city: 'Chennai', score: 7, timestamp: '2 days ago', thumbnail: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=200' },
  { id: '7', type: 'rating', studioName: 'Rhythm Nation', city: 'Hyderabad', score: 9, timestamp: '2 days ago', thumbnail: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=200' },
  { id: '8', type: 'xp', xpEarned: 500, reason: 'Weekly bonus', timestamp: '3 days ago' },
];

export default function FanActivityPage() {
  return (
    <div className="min-h-screen bg-background-dark pb-24">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/fan/profile" className="text-text-secondary hover:text-white transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <div>
            <h1 className="text-white text-2xl font-bold">Activity History</h1>
            <p className="text-text-secondary text-sm">Your ratings, badges, and achievements</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button className="px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold whitespace-nowrap">
            All Activity
          </button>
          <button className="px-4 py-2 rounded-full bg-background-card border border-border-primary text-text-secondary text-sm font-semibold whitespace-nowrap hover:border-primary/50 transition-colors">
            Ratings
          </button>
          <button className="px-4 py-2 rounded-full bg-background-card border border-border-primary text-text-secondary text-sm font-semibold whitespace-nowrap hover:border-primary/50 transition-colors">
            Badges
          </button>
          <button className="px-4 py-2 rounded-full bg-background-card border border-border-primary text-text-secondary text-sm font-semibold whitespace-nowrap hover:border-primary/50 transition-colors">
            Rewards
          </button>
        </div>

        {/* Activity List */}
        <div className="space-y-3">
          {activityData.map((activity) => (
            <div key={activity.id} className="bg-background-card border border-border-primary rounded-xl p-4">
              {activity.type === 'rating' && (
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-lg overflow-hidden bg-background-elevated flex-shrink-0">
                    <img src={activity.thumbnail} alt={activity.studioName} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-primary text-sm">star</span>
                      <span className="text-text-secondary text-xs">Rated a performance</span>
                    </div>
                    <p className="text-white font-semibold truncate">{activity.studioName}</p>
                    <p className="text-text-secondary text-xs">{activity.city}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="flex items-center gap-1 bg-primary/20 px-3 py-1 rounded-full mb-1">
                      <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-primary font-bold">{activity.score}</span>
                    </div>
                    <p className="text-text-muted text-xs">{activity.timestamp}</p>
                  </div>
                </div>
              )}

              {activity.type === 'badge' && (
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-orange-400 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{activity.badgeIcon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-orange-400 text-sm">emoji_events</span>
                      <span className="text-text-secondary text-xs">Badge earned</span>
                    </div>
                    <p className="text-white font-semibold">{activity.badgeName}</p>
                    <p className="text-orange-400 text-xs">New achievement unlocked!</p>
                  </div>
                  <p className="text-text-muted text-xs">{activity.timestamp}</p>
                </div>
              )}

              {activity.type === 'streak' && (
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-red-400 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-red-400 text-sm">local_fire_department</span>
                      <span className="text-text-secondary text-xs">Streak milestone</span>
                    </div>
                    <p className="text-white font-semibold">{activity.streakDays} Day Streak!</p>
                    <p className="text-red-400 text-xs">Keep rating to maintain your streak</p>
                  </div>
                  <p className="text-text-muted text-xs">{activity.timestamp}</p>
                </div>
              )}

              {activity.type === 'xp' && (
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-purple-400 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-purple-400 text-sm">add_circle</span>
                      <span className="text-text-secondary text-xs">XP earned</span>
                    </div>
                    <p className="text-white font-semibold">+{activity.xpEarned} XP</p>
                    <p className="text-purple-400 text-xs">{activity.reason}</p>
                  </div>
                  <p className="text-text-muted text-xs">{activity.timestamp}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-6 text-center">
          <button className="px-6 py-3 rounded-xl bg-background-card border border-border-primary text-white font-semibold hover:border-primary/50 transition-colors">
            Load More Activity
          </button>
        </div>
      </div>
    </div>
  );
}
EOFmkdir -p app/\(main\)/fan/activity && cat > app/\(main\)/fan/activity/page.tsx << 'EOF'
'use client';

import Link from 'next/link';

const activityData = [
  { id: '1', type: 'rating', studioName: 'Nrutya Academy', city: 'Bangalore', score: 9, timestamp: '2 hours ago', thumbnail: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=200' },
  { id: '2', type: 'rating', studioName: 'Urban Drip Studio', city: 'Mumbai', score: 8, timestamp: '5 hours ago', thumbnail: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=200' },
  { id: '3', type: 'badge', badgeName: 'Week Warrior', badgeIcon: 'local_fire_department', timestamp: '1 day ago' },
  { id: '4', type: 'rating', studioName: 'Kings United', city: 'Delhi', score: 10, timestamp: '1 day ago', thumbnail: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=200' },
  { id: '5', type: 'streak', streakDays: 7, timestamp: '1 day ago' },
  { id: '6', type: 'rating', studioName: 'Dance Factory', city: 'Chennai', score: 7, timestamp: '2 days ago', thumbnail: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=200' },
  { id: '7', type: 'rating', studioName: 'Rhythm Nation', city: 'Hyderabad', score: 9, timestamp: '2 days ago', thumbnail: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=200' },
  { id: '8', type: 'xp', xpEarned: 500, reason: 'Weekly bonus', timestamp: '3 days ago' },
];

export default function FanActivityPage() {
  return (
    <div className="min-h-screen bg-background-dark pb-24">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/fan/profile" className="text-text-secondary hover:text-white transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <div>
            <h1 className="text-white text-2xl font-bold">Activity History</h1>
            <p className="text-text-secondary text-sm">Your ratings, badges, and achievements</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button className="px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold whitespace-nowrap">
            All Activity
          </button>
          <button className="px-4 py-2 rounded-full bg-background-card border border-border-primary text-text-secondary text-sm font-semibold whitespace-nowrap hover:border-primary/50 transition-colors">
            Ratings
          </button>
          <button className="px-4 py-2 rounded-full bg-background-card border border-border-primary text-text-secondary text-sm font-semibold whitespace-nowrap hover:border-primary/50 transition-colors">
            Badges
          </button>
          <button className="px-4 py-2 rounded-full bg-background-card border border-border-primary text-text-secondary text-sm font-semibold whitespace-nowrap hover:border-primary/50 transition-colors">
            Rewards
          </button>
        </div>

        {/* Activity List */}
        <div className="space-y-3">
          {activityData.map((activity) => (
            <div key={activity.id} className="bg-background-card border border-border-primary rounded-xl p-4">
              {activity.type === 'rating' && (
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-lg overflow-hidden bg-background-elevated flex-shrink-0">
                    <img src={activity.thumbnail} alt={activity.studioName} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-primary text-sm">star</span>
                      <span className="text-text-secondary text-xs">Rated a performance</span>
                    </div>
                    <p className="text-white font-semibold truncate">{activity.studioName}</p>
                    <p className="text-text-secondary text-xs">{activity.city}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="flex items-center gap-1 bg-primary/20 px-3 py-1 rounded-full mb-1">
                      <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-primary font-bold">{activity.score}</span>
                    </div>
                    <p className="text-text-muted text-xs">{activity.timestamp}</p>
                  </div>
                </div>
              )}

              {activity.type === 'badge' && (
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-orange-400 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{activity.badgeIcon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-orange-400 text-sm">emoji_events</span>
                      <span className="text-text-secondary text-xs">Badge earned</span>
                    </div>
                    <p className="text-white font-semibold">{activity.badgeName}</p>
                    <p className="text-orange-400 text-xs">New achievement unlocked!</p>
                  </div>
                  <p className="text-text-muted text-xs">{activity.timestamp}</p>
                </div>
              )}

              {activity.type === 'streak' && (
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-red-400 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-red-400 text-sm">local_fire_department</span>
                      <span className="text-text-secondary text-xs">Streak milestone</span>
                    </div>
                    <p className="text-white font-semibold">{activity.streakDays} Day Streak!</p>
                    <p className="text-red-400 text-xs">Keep rating to maintain your streak</p>
                  </div>
                  <p className="text-text-muted text-xs">{activity.timestamp}</p>
                </div>
              )}

              {activity.type === 'xp' && (
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-purple-400 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-purple-400 text-sm">add_circle</span>
                      <span className="text-text-secondary text-xs">XP earned</span>
                    </div>
                    <p className="text-white font-semibold">+{activity.xpEarned} XP</p>
                    <p className="text-purple-400 text-xs">{activity.reason}</p>
                  </div>
                  <p className="text-text-muted text-xs">{activity.timestamp}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-6 text-center">
          <button className="px-6 py-3 rounded-xl bg-background-card border border-border-primary text-white font-semibold hover:border-primary/50 transition-colors">
            Load More Activity
          </button>
        </div>
      </div>
    </div>
  );
}
