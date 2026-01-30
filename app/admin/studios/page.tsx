'use client';

import { useState } from 'react';

const studiosData = [
  { id: '1', name: 'Nrutya Academy', city: 'Bangalore', status: 'verified', performances: 12, score: 98.5, joined: 'Oct 2025' },
  { id: '2', name: 'Urban Drip Studio', city: 'Mumbai', status: 'verified', performances: 8, score: 94.2, joined: 'Oct 2025' },
  { id: '3', name: 'Kings United', city: 'Delhi', status: 'verified', performances: 15, score: 91.8, joined: 'Sep 2025' },
  { id: '4', name: 'Rhythm Nation', city: 'Hyderabad', status: 'pending', performances: 3, score: 85.4, joined: 'Jan 2026' },
  { id: '5', name: 'Dance Factory', city: 'Chennai', status: 'verified', performances: 6, score: 82.1, joined: 'Nov 2025' },
  { id: '6', name: 'Step Up Academy', city: 'Pune', status: 'pending', performances: 2, score: 78.9, joined: 'Jan 2026' },
  { id: '7', name: 'Eastern Beats', city: 'Kolkata', status: 'suspended', performances: 4, score: 0, joined: 'Dec 2025' },
  { id: '8', name: 'Western Flow', city: 'Ahmedabad', status: 'verified', performances: 5, score: 80.3, joined: 'Dec 2025' },
];

export default function StudiosPage() {
  const [studios, setStudios] = useState(studiosData);
  const [filter, setFilter] = useState<'all' | 'verified' | 'pending' | 'suspended'>('all');
  const [search, setSearch] = useState('');

  const filteredStudios = studios.filter(studio => {
    const matchesFilter = filter === 'all' || studio.status === filter;
    const matchesSearch = studio.name.toLowerCase().includes(search.toLowerCase()) ||
                         studio.city.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleVerify = (id: string) => {
    setStudios(prev => prev.map(s => s.id === id ? { ...s, status: 'verified' } : s));
  };

  const handleSuspend = (id: string) => {
    setStudios(prev => prev.map(s => s.id === id ? { ...s, status: 'suspended' } : s));
  };

  const handleReactivate = (id: string) => {
    setStudios(prev => prev.map(s => s.id === id ? { ...s, status: 'verified' } : s));
  };

  const statusCounts = {
    all: studios.length,
    verified: studios.filter(s => s.status === 'verified').length,
    pending: studios.filter(s => s.status === 'pending').length,
    suspended: studios.filter(s => s.status === 'suspended').length,
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-white text-2xl font-bold mb-1">Studio Management</h1>
        <p className="text-text-secondary">Manage registered dance studios</p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Filter Tabs */}
        <div className="flex gap-2 flex-wrap">
          {(['all', 'verified', 'pending', 'suspended'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                filter === f
                  ? f === 'verified' ? 'bg-neon-green/20 text-neon-green' 
                    : f === 'pending' ? 'bg-yellow-400/20 text-yellow-400'
                    : f === 'suspended' ? 'bg-red-400/20 text-red-400'
                    : 'bg-primary/20 text-primary'
                  : 'bg-background-card text-text-secondary hover:text-white'
              }`}
            >
              {f} ({statusCounts[f]})
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative flex-1 max-w-xs">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-xl">search</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search studios..."
            className="w-full bg-background-card border border-border-primary rounded-lg pl-10 pr-4 py-2 text-white placeholder-text-secondary outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Studios Table */}
      <div className="bg-background-card border border-border-primary rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-primary">
                <th className="text-left text-text-secondary text-xs font-bold uppercase tracking-wider px-6 py-4">Studio</th>
                <th className="text-left text-text-secondary text-xs font-bold uppercase tracking-wider px-6 py-4">City</th>
                <th className="text-left text-text-secondary text-xs font-bold uppercase tracking-wider px-6 py-4">Status</th>
                <th className="text-left text-text-secondary text-xs font-bold uppercase tracking-wider px-6 py-4">Performances</th>
                <th className="text-left text-text-secondary text-xs font-bold uppercase tracking-wider px-6 py-4">Grid Score</th>
                <th className="text-left text-text-secondary text-xs font-bold uppercase tracking-wider px-6 py-4">Joined</th>
                <th className="text-right text-text-secondary text-xs font-bold uppercase tracking-wider px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudios.map((studio) => (
                <tr key={studio.id} className="border-b border-border-primary last:border-0 hover:bg-background-elevated transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-white font-medium">{studio.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-text-secondary">{studio.city}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase ${
                      studio.status === 'verified' ? 'bg-neon-green/20 text-neon-green' :
                      studio.status === 'pending' ? 'bg-yellow-400/20 text-yellow-400' :
                      'bg-red-400/20 text-red-400'
                    }`}>
                      {studio.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-white">{studio.performances}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={studio.score > 0 ? 'text-white font-semibold' : 'text-text-secondary'}>
                      {studio.score > 0 ? studio.score : '—'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-text-secondary text-sm">{studio.joined}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {studio.status === 'pending' && (
                        <button
                          onClick={() => handleVerify(studio.id)}
                          className="px-3 py-1.5 bg-neon-green/20 text-neon-green rounded-lg text-xs font-medium hover:bg-neon-green/30 transition-colors"
                        >
                          Verify
                        </button>
                      )}
                      {studio.status === 'verified' && (
                        <button
                          onClick={() => handleSuspend(studio.id)}
                          className="px-3 py-1.5 bg-red-400/20 text-red-400 rounded-lg text-xs font-medium hover:bg-red-400/30 transition-colors"
                        >
                          Suspend
                        </button>
                      )}
                      {studio.status === 'suspended' && (
                        <button
                          onClick={() => handleReactivate(studio.id)}
                          className="px-3 py-1.5 bg-neon-green/20 text-neon-green rounded-lg text-xs font-medium hover:bg-neon-green/30 transition-colors"
                        >
                          Reactivate
                        </button>
                      )}
                      <button className="p-1.5 text-text-secondary hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-lg">more_vert</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredStudios.length === 0 && (
          <div className="text-center py-12 text-text-secondary">
            <span className="material-symbols-outlined text-4xl mb-2">search_off</span>
            <p>No studios found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 text-sm">
        <p className="text-text-secondary">
          Showing {filteredStudios.length} of {studios.length} studios
        </p>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 bg-background-card border border-border-primary rounded-lg text-text-secondary hover:text-white transition-colors">
            Previous
          </button>
          <button className="px-3 py-1.5 bg-primary text-white rounded-lg font-medium">1</button>
          <button className="px-3 py-1.5 bg-background-card border border-border-primary rounded-lg text-text-secondary hover:text-white transition-colors">
            2
          </button>
          <button className="px-3 py-1.5 bg-background-card border border-border-primary rounded-lg text-text-secondary hover:text-white transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
