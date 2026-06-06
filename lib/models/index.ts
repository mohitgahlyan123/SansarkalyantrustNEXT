import mongoose from 'mongoose'

// User Schema
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, enum: ['admin', 'editor'], default: 'editor' },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
)

// Campaign Schema
const campaignSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    goal: { type: Number, required: true },
    raised: { type: Number, default: 0 },
    donors: { type: Number, default: 0 },
    status: { type: String, enum: ['active', 'inactive', 'completed'], default: 'active' },
  },
  { timestamps: true }
)

// Event Schema
const eventSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    date: { type: Date, required: true },
    type: { type: String, required: true }, // 'Health Camp', 'Education', 'Environment'
    status: { type: String, enum: ['upcoming', 'completed'], default: 'upcoming' },
  },
  { timestamps: true }
)

// Blog Post Schema
const blogSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    content: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, default: 'Sansar Kalyan Trust' },
    published: { type: Boolean, default: false },
  },
  { timestamps: true }
)

// Gallery Schema
const gallerySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String, required: true },
    category: { type: String },
  },
  { timestamps: true }
)

// Donation Schema
const donationSchema = new mongoose.Schema(
  {
    campaignId: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign' },
    amount: { type: Number, required: true },
    method: { type: String, enum: ['online', 'upi', 'bank'], required: true },
    donorName: { type: String, required: true },
    donorEmail: { type: String, required: true },
    donorPhone: { type: String },
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
    transactionId: { type: String },
  },
  { timestamps: true }
)

// Contact Inquiry Schema
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    message: { type: String, required: true },
    status: { type: String, enum: ['new', 'read', 'replied'], default: 'new' },
  },
  { timestamps: true }
)

// Volunteer Application Schema
const volunteerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    skills: [{ type: String }],
    motivation: { type: String, required: true },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  },
  { timestamps: true }
)

// Create and export models
export const User = mongoose.models.User || mongoose.model('User', userSchema)
export const Campaign = mongoose.models.Campaign || mongoose.model('Campaign', campaignSchema)
export const Event = mongoose.models.Event || mongoose.model('Event', eventSchema)
export const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema)
export const Gallery = mongoose.models.Gallery || mongoose.model('Gallery', gallerySchema)
export const Donation = mongoose.models.Donation || mongoose.model('Donation', donationSchema)
export const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema)
export const Volunteer = mongoose.models.Volunteer || mongoose.model('Volunteer', volunteerSchema)
