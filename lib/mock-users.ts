// This module stores mock users for authentication
// In production, this would be a database

interface MockUser {
  _id: string
  email: string
  password: string
  name: string
  role: 'admin' | 'editor'
  isActive: boolean
  createdAt: Date
}

// Global mock users storage
let mockUsers: MockUser[] = [
  {
    _id: 'demo-user-1',
    email: 'demo@test.com',
    password: '$2a$10$K80hP7.8.yU.i3FWDvZjzeNqkV6bCxA5kkT8.eFmXtQp8x7hqBL5K', // "password123" hashed
    name: 'Demo Admin',
    role: 'admin',
    isActive: true,
    createdAt: new Date(),
  },
]

export function getMockUsers(): MockUser[] {
  return mockUsers
}

export function addMockUser(user: MockUser): void {
  mockUsers.push(user)
}

export function findMockUserByEmail(email: string): MockUser | undefined {
  return mockUsers.find((u) => u.email === email.toLowerCase())
}

export function clearMockUsers(): void {
  mockUsers = []
}
