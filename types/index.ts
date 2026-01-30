import { Timestamp } from 'firebase/firestore';

export interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  phone: string | null;
  photoURL: string | null;
  role: 'fan' | 'studio' | 'admin';
  studioId?: string;
  ratingsCount: number;
  createdAt: Timestamp;
  lastActiveAt: Timestamp;
}

export interface Studio {
  id: string;
  name: string;
  city: string;
  state: string;
  logoURL?: string;
  ownerId: string;
  gridScore: number;
  rank: number;
  performanceCount: number;
  isVerified: boolean;
  createdAt: Timestamp;
}

export interface Performance {
  id: string;
  studioId: string;
  studioName: string;
  city: string;
  challengeId: string;
  videoURL: string;
  thumbnailURL: string;
  duration: number;
  status: 'pending' | 'approved' | 'rejected';
  gridScore: number;
  ratingsCount: number;
  ratingsSum: number;
  uploadedAt: Timestamp;
  approvedAt?: Timestamp;
}

export interface Rating {
  id: string;
  userId: string;
  performanceId: string;
  studioId: string;
  score: number;
  deviceId: string;
  createdAt: Timestamp;
}

export interface Challenge {
  id: string;
  title: string;
  trackName: string;
  trackURL: string;
  trackDuration: number;
  status: 'upcoming' | 'active' | 'ended';
  prizePool: number;
  startDate: Timestamp;
  endDate: Timestamp;
  rules: string[];
  participantCount: number;
}
