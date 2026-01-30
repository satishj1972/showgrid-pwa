'use client';

import { useState } from 'react';

const exportOptions = [
  {
    id: 'leaderboard',
    title: 'Leaderboard Data',
    description: 'Export current challenge leaderboard with rankings, scores, and studio details',
    icon: 'leaderboard',
    formats: ['CSV', 'Excel'],
  },
  {
    id: 'studios',
    title: 'Studios List',
    description: 'Export all registered studios with contact info, verification status, and performance count',
    icon: 'groups',
    formats: ['CSV', 'Excel'],
  },
  {
    id: 'performances',
    title: 'Performance Data',
    description: 'Export all performances with ratings, scores, and moderation status',
    icon: 'movie',
    formats: ['CSV', 'Excel'],
  },
  {
    id: 'ratings',
    title: 'Ratings Analytics',
    description: 'Export detailed rating data including user engagement and distribution',
    icon: 'analytics',
    formats: ['CSV', 'Excel'],
  },
  {
    id: 'users',
    title: 'User Data',
    description: 'Export fan user data with activity metrics and XP points',
    icon: 'person',
    formats: ['CSV'],
  },
];

const recentExports = [
  { name: 'leaderboard_season4_2026-01-28.csv', date: '2 days ago', size: '24 KB' },
  { name: 'studios_all_2026-01-25.xlsx', date: '5 days ago', size: '156 KB' },
  { name: 'performances_jan2026.csv', date: '1 week ago', size: '342 KB' },
];

export default function ExportPage() {
  const [selectedExport, setSelectedExport] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string>('CSV');
  const [dateRange, setDateRange] = useState({ from: '', to: '' });
  const [exporting, setExporting] = useState(false);
  const [exportComplete, setExportComplete] = useState(false);

  const handleExport = async () => {
    if (!selectedExport) return;
    setExporting(true);
    setExportComplete(false);
    
    // Simulate export
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setExporting(false);
    setExportComplete(true);
    
    // Reset after 3 seconds
    setTimeout(() => setExportComplete(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-white text-2xl font-bold mb-1">Export Data</h1>
        <p className="text-text-secondary">Download platform data for reporting and analysis</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Export Options */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-white font-bold mb-2">Select Data to Export</h2>
          
          {exportOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => { setSelectedExport(option.id); setExportComplete(false); }}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                selectedExport === option.id
                  ? 'bg-primary/10 border-primary'
                  : 'bg-background-card border-border-primary hover:border-primary/50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`size-12 rounded-lg flex items-center justify-center ${
                  selectedExport === option.id ? 'bg-primary/20' : 'bg-background-elevated'
                }`}>
                  <span className={`material-symbols-outlined ${
                    selectedExport === option.id ? 'text-primary' : 'text-text-secondary'
                  }`}>{option.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">{option.title}</h3>
                  <p className="text-text-secondary text-sm">{option.description}</p>
                  <div className="flex gap-2 mt-2">
                    {option.formats.map(format => (
                      <span key={format} className="text-xs bg-background-elevated px-2 py-0.5 rounded text-text-secondary">
                        {format}
                      </span>
                    ))}
                  </div>
                </div>
                {selectedExport === option.id && (
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Export Settings */}
        <div className="space-y-4">
          {/* Format Selection */}
          <div className="bg-background-card border border-border-primary rounded-xl p-4">
            <h3 className="text-white font-semibold mb-3">Export Format</h3>
            <div className="flex gap-2">
              {['CSV', 'Excel'].map(format => (
                <button
                  key={format}
                  onClick={() => setSelectedFormat(format)}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedFormat === format
                      ? 'bg-primary text-white'
                      : 'bg-background-elevated text-text-secondary hover:text-white'
                  }`}
                >
                  {format}
                </button>
              ))}
            </div>
          </div>

          {/* Date Range */}
          <div className="bg-background-card border border-border-primary rounded-xl p-4">
            <h3 className="text-white font-semibold mb-3">Date Range (Optional)</h3>
            <div className="space-y-3">
              <div>
                <label className="text-text-secondary text-xs mb-1 block">From</label>
                <input
                  type="date"
                  value={dateRange.from}
                  onChange={(e) => setDateRange(prev => ({ ...prev, from: e.target.value }))}
                  className="w-full bg-background-elevated border border-border-primary rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="text-text-secondary text-xs mb-1 block">To</label>
                <input
                  type="date"
                  value={dateRange.to}
                  onChange={(e) => setDateRange(prev => ({ ...prev, to: e.target.value }))}
                  className="w-full bg-background-elevated border border-border-primary rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Export Button */}
          <button
            onClick={handleExport}
            disabled={!selectedExport || exporting}
            className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${
              exportComplete
                ? 'bg-neon-green text-black'
                : selectedExport && !exporting
                  ? 'bg-primary hover:bg-primary/90 text-white'
                  : 'bg-background-elevated text-text-secondary cursor-not-allowed'
            }`}
          >
            {exporting ? (
              <>
                <span className="material-symbols-outlined animate-spin">progress_activity</span>
                Exporting...
              </>
            ) : exportComplete ? (
              <>
                <span className="material-symbols-outlined">check_circle</span>
                Download Ready!
              </>
            ) : (
              <>
                <span className="material-symbols-outlined">download</span>
                Export {selectedFormat}
              </>
            )}
          </button>

          {/* Recent Exports */}
          <div className="bg-background-card border border-border-primary rounded-xl p-4">
            <h3 className="text-white font-semibold mb-3">Recent Exports</h3>
            <div className="space-y-2">
              {recentExports.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-background-elevated transition-colors">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="material-symbols-outlined text-text-secondary text-sm">description</span>
                    <div className="min-w-0">
                      <p className="text-white text-sm truncate">{file.name}</p>
                      <p className="text-text-muted text-xs">{file.date} • {file.size}</p>
                    </div>
                  </div>
                  <button className="text-primary hover:text-primary/80 transition-colors p-1">
                    <span className="material-symbols-outlined text-sm">download</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
