'use client';

import Link from 'next/link';

const stats = [
  { label: 'Pending Reviews', value: 24, icon: 'pending_actions', color: 'text-yellow-400', bgColor: 'bg-yellow-400/20', link: '/admin/moderation' },
  { label: 'Active Studios', value: 156, icon: 'groups', color: 'text-neon-green', bgColor: 'bg-neon-green/20', link: '/admin/studios' },
  { label: 'Total Performances', value: 1284, icon: 'movie', color: 'text-primary', bgColor: 'bg-primary/20', link: null },
  { label: 'Active Challenge', value: 1, icon: 'emoji_events', color: 'text-[#00f2ff]', bgColor: 'bg-[#00f2ff]/20', link: '/admin/challenges' },
];

const recentActivity = [
  { type: 'upload', message: 'Nrutya Academy uploaded a new performance', time: '5 mins ago', icon: 'upload', color: 'text-primary' },
  { type: 'approve', message: 'Urban Drip Studio performance approved', time: '12 mins ago', icon: 'check_circle', color: 'text-neon-green' },
  { type: 'reject', message: 'Performance rejected - audio mismatch', time: '25 mins ago', icon: 'cancel', color: 'text-red-400' },
  { type: 'register', message: 'New studio registered: Dance Factory Chennai', time: '1 hour ago', icon: 'person_add', color: 'text-[#00f2ff]' },
  { type: 'upload', message: 'Kings United uploaded a new performance', time: '2 hours ago', icon: 'upload', color: 'text-primary' },
];

const pendingReviews = [
  { id: '1', studio: 'Rhythm Nation', city: 'Hyderabad', uploadedAt: '10 mins ago', thumbnail: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=200' },
  { id: '2', studio: 'Step Up Academy', city: 'Pune', uploadedAt: '25 mins ago', thumbnail: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=200' },
  { id: '3', studio: 'Eastern Beats', city: 'Kolkata', uploadedAt: '1 hour ago', thumbnail: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=200' },
];

export default function AdminDashboardPage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-white text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-text-secondary">Overview of ShowGrid platform activity</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.link || '#'}
            className={`bg-background-card border border-border-primary rounded-xl p-5 hover:border-primary/50 transition-all ${!stat.link && 'pointer-events-none'}`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`size-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                <span className={`material-symbols-outlined ${stat.color}`}>{stat.icon}</span>
              </div>
              {stat.link && (
                <span className="material-symbols-outlined text-text-secondary text-sm">arrow_forward</span>
              )}
            </div>
            <p className="text-white text-3xl font-bold mb-1">{stat.value}</p>
            <p className="text-text-secondary text-sm">{stat.label}</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Reviews */}
        <div className="bg-background-card border border-border-primary rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-yellow-400">pending_actions</span>
              Pending Reviews
            </h2>
            <Link href="/admin/moderation" className="text-primary text-sm font-medium hover:underline">
              View All
            </Link>
          </div>

          <div className="space-y-3">
            {pendingReviews.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-3 bg-background-elevated rounded-lg">
                <div className="size-14 rounded-lg overflow-hidden bg-background-dark flex-shrink-0">
                  <img src={item.thumbnail} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium truncate">{item.studio}</p>
                  <p className="text-text-secondary text-sm">{item.city} • {item.uploadedAt}</p>
                </div>
                <Link
                  href={`/admin/moderation?id=${item.id}`}
                  className="px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium hover:bg-primary/30 transition-colors"
                >
                  Review
                </Link>
              </div>
            ))}
          </div>

          {pendingReviews.length === 0 && (
            <div className="text-center py-8 text-text-secondary">
              <span className="material-symbols-outlined text-4xl mb-2">check_circle</span>
              <p>All caught up! No pending reviews.</p>
            </div>
          )}
        </div>

        {/* Recent Activity */}
        <div className="bg-background-card border border-border-primary rounded-xl p-6">
          <h2 className="text-white font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">history</span>
            Recent Activity
          </h2>

          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`size-8 rounded-full ${activity.color.replace('text-', 'bg-')}/20 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <span className={`material-symbols-outlined text-sm ${activity.color}`}>{activity.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm">{activity.message}</p>
                  <p className="text-text-muted text-xs">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-background-card border border-border-primary rounded-xl p-6">
        <h2 className="text-white font-bold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/moderation"
            className="flex items-center gap-2 px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-lg font-medium hover:bg-yellow-400/30 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">pending_actions</span>
            Review Queue
          </Link>
          <Link
            href="/admin/challenges"
            className="flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-lg font-medium hover:bg-primary/30 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">add_circle</span>
            New Challenge
          </Link>
          <Link
            href="/admin/export"
            className="flex items-center gap-2 px-4 py-2 bg-neon-green/20 text-neon-green rounded-lg font-medium hover:bg-neon-green/30 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">download</span>
            Export Data
          </Link>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-[#00f2ff]/20 text-[#00f2ff] rounded-lg font-medium hover:bg-[#00f2ff]/30 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">notifications</span>
            Send Notification
          </button>
        </div>
      </div>
    </div>
  );
}
