// types/index.ts

export interface User {
  id: string
  full_name: string
  email: string
  avatar_url?: string
  role: 'admin' | 'project_manager' | 'developer'
  phone?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Client {
  id: string
  name: string
  email?: string
  phone?: string
  company?: string
  address?: string
  last_contact?: string
  notes?: string
  created_at: string
  updated_at: string
}

export interface Project {
  id: string
  name: string
  client_id: string
  project_manager_id: string
  status: 'quotation' | 'deposit_paid' | 'development' | 'testing' | 'delivered'
  progress: number
  start_date?: string
  deadline: string
  total_budget?: number
  description?: string
  is_overdue: boolean
  created_at: string
  updated_at: string
  // Relations
  client?: Client
  manager?: User
}

export interface Task {
  id: string
  project_id: string
  assigned_to: string
  title: string
  description?: string
  status: 'new' | 'in_progress' | 'review' | 'done'
  priority: 'low' | 'medium' | 'high'
  due_date: string
  estimated_hours?: number
  actual_hours?: number
  created_at: string
  updated_at: string
  // Relations
  project?: Project
  assignee?: User
}

export interface Invoice {
  id: string
  project_id: string
  client_id: string
  invoice_number: string
  issue_date: string
  due_date: string
  amount: number
  status: 'unpaid' | 'partial' | 'paid'
  paid_amount: number
  payment_date?: string
  payment_method?: 'cash' | 'bank_transfer' | 'check' | 'online'
  notes?: string
  created_at: string
  updated_at: string
  // Relations
  project?: Project
  client?: Client
}

export interface Asset {
  id: string
  project_id?: string
  client_id: string
  asset_type: 'domain' | 'hosting' | 'figma' | 'api_key' | 'ssl' | 'other'
  name: string
  provider?: string
  purchase_date?: string
  expiry_date: string
  login_url?: string
  username?: string
  password_encrypted?: string
  cost?: number
  renewal_reminder_days: number
  notes?: string
  created_at: string
  updated_at: string
  // Relations
  project?: Project
  client?: Client
}

export interface Communication {
  id: string
  client_id: string
  user_id: string
  type: 'whatsapp' | 'email' | 'call' | 'meeting'
  direction: 'incoming' | 'outgoing'
  content: string
  communicated_at: string
  is_replied: boolean
  replied_at?: string
  created_at: string
  // Relations
  client?: Client
  user?: User
}