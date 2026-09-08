// ========== أنواع البيانات من Supabase (snake_case) ==========

export interface ProjectDB {
  id: string
  title: string
  client: string
  status: string
  progress: number
  tasks: string
  assignee: string
  assignee_initial: string
  due_date: string
  due_status: string
  budget: string
  received: string
  icon: string
  icon_bg: string
  is_overdue: boolean
  is_completed: boolean
  is_quote: boolean
  created_at: string
  updated_at: string
}

export interface TaskDB {
  id: string
  title: string
  project: string
  project_icon: string
  priority: string
  priority_color: string
  status: string
  status_color: string
  assignee: string
  assignee_initial: string
  due_date: string
  due_status: string
  is_overdue: boolean
  comments: number
  attachments: number
  description: string
  created_at: string
  updated_at: string
}

export interface ClientDB {
  id: string
  name: string
  initial: string
  sector: string
  status: string
  status_color: string
  contact_name: string
  contact_initial: string
  contact_title: string
  phone: string
  email: string
  projects: number
  active_projects: number
  total_revenue: string
  paid_amount: string
  remaining_amount: string
  progress: number
  last_contact: string
  created_at: string
  updated_at: string
}

export interface InvoiceDB {
  id: string
  number: string
  date: string
  client: string
  client_initial: string
  project: string
  project_icon: string
  amount: string
  amount_sar: string
  due_date: string
  due_status: string
  status: string
  status_color: string
  payment_method: string
  payment_icon: string
  is_overdue: boolean
  is_paid: boolean
  created_at: string
  updated_at: string
}

export interface AssetDB {
  id: string
  name: string
  icon: string
  icon_bg: string
  category: string
  category_color: string
  project: string
  project_color: string
  cost: string
  cost_period: string
  payment_method: string
  payment_icon: string
  renewal_date: string
  renewal_status: string
  renewal_color: string
  status: string
  status_color: string
  is_urgent: boolean
  details: string
  created_at: string
  updated_at: string
}

export interface SettingsDB {
  id: string
  agency_name_ar: string
  agency_name_en: string
  domain: string
  email: string
  country: string
  timezone: string
  currency: string
  vat_number: string
  tax_rate: number
  payment_period: string
  auto_reminder: boolean
  language: string
  theme: string
  push_notifications: boolean
  two_factor: boolean
  created_at: string
  updated_at: string
}

// ========== أنواع البيانات للتطبيق (camelCase - جميع الـ id من نوع string) ==========

export interface Project {
  id: string          // ✅ string
  title: string
  client: string
  status: string
  progress: number
  tasks: string
  assignee: string
  assigneeInitial: string
  dueDate: string
  dueStatus: string
  budget: string
  received: string
  icon: string
  iconBg: string
  isOverdue: boolean
  isCompleted: boolean
  isQuote: boolean
  createdAt: string
  updatedAt: string
}

export interface Task {
  id: string
  title: string
  project: string
  projectIcon: string
  priority: string
  priorityColor: string
  status: string
  statusColor: string
  assignee: string
  assigneeInitial: string
  dueDate: string
  dueStatus: string
  isOverdue: boolean
  comments: number
  attachments: number
  description: string
  createdAt: string
  updatedAt: string
}

export interface Client {
  id: string
  name: string
  initial: string
  sector: string
  status: string
  statusColor: string
  contactName: string
  contactInitial: string
  contactTitle: string
  phone: string
  email: string
  projects: number
  activeProjects: number
  totalRevenue: string
  paidAmount: string
  remainingAmount: string
  progress: number
  lastContact: string
  createdAt: string
  updatedAt: string
}

export interface Invoice {
  id: string
  number: string
  date: string
  client: string
  clientInitial: string
  project: string
  projectIcon: string
  amount: string
  amountSar: string
  dueDate: string
  dueStatus: string
  status: string
  statusColor: string
  paymentMethod: string
  paymentIcon: string
  isOverdue: boolean
  isPaid: boolean
  createdAt: string
  updatedAt: string
}

export interface Asset {
  id: string
  name: string
  icon: string
  iconBg: string
  category: string
  categoryColor: string
  project: string
  projectColor: string
  cost: string
  costPeriod: string
  paymentMethod: string
  paymentIcon: string
  renewalDate: string
  renewalStatus: string
  renewalColor: string
  status: string
  statusColor: string
  isUrgent: boolean
  details: string
  createdAt: string
  updatedAt: string
}

export interface Settings {
  id: string
  agencyNameAr: string
  agencyNameEn: string
  domain: string
  email: string
  country: string
  timezone: string
  currency: string
  vatNumber: string
  taxRate: number
  paymentPeriod: string
  autoReminder: boolean
  language: string
  theme: string
  pushNotifications: boolean
  twoFactor: boolean
  createdAt: string
  updatedAt: string
}

// ========== دالات التحويل ==========

export function mapProject(db: ProjectDB): Project {
  return {
    id: db.id,                    // ✅ string
    title: db.title,
    client: db.client,
    status: db.status,
    progress: db.progress,
    tasks: db.tasks,
    assignee: db.assignee,
    assigneeInitial: db.assignee_initial,
    dueDate: db.due_date,
    dueStatus: db.due_status,
    budget: db.budget,
    received: db.received,
    icon: db.icon,
    iconBg: db.icon_bg,
    isOverdue: db.is_overdue,
    isCompleted: db.is_completed,
    isQuote: db.is_quote,
    createdAt: db.created_at,
    updatedAt: db.updated_at,
  }
}

export function mapTask(db: TaskDB): Task {
  return {
    id: db.id,
    title: db.title,
    project: db.project,
    projectIcon: db.project_icon,
    priority: db.priority,
    priorityColor: db.priority_color,
    status: db.status,
    statusColor: db.status_color,
    assignee: db.assignee,
    assigneeInitial: db.assignee_initial,
    dueDate: db.due_date,
    dueStatus: db.due_status,
    isOverdue: db.is_overdue,
    comments: db.comments,
    attachments: db.attachments,
    description: db.description,
    createdAt: db.created_at,
    updatedAt: db.updated_at,
  }
}

export function mapClient(db: ClientDB): Client {
  return {
    id: db.id,
    name: db.name,
    initial: db.initial,
    sector: db.sector,
    status: db.status,
    statusColor: db.status_color,
    contactName: db.contact_name,
    contactInitial: db.contact_initial,
    contactTitle: db.contact_title,
    phone: db.phone,
    email: db.email,
    projects: db.projects,
    activeProjects: db.active_projects,
    totalRevenue: db.total_revenue,
    paidAmount: db.paid_amount,
    remainingAmount: db.remaining_amount,
    progress: db.progress,
    lastContact: db.last_contact,
    createdAt: db.created_at,
    updatedAt: db.updated_at,
  }
}

export function mapInvoice(db: InvoiceDB): Invoice {
  return {
    id: db.id,
    number: db.number,
    date: db.date,
    client: db.client,
    clientInitial: db.client_initial,
    project: db.project,
    projectIcon: db.project_icon,
    amount: db.amount,
    amountSar: db.amount_sar,
    dueDate: db.due_date,
    dueStatus: db.due_status,
    status: db.status,
    statusColor: db.status_color,
    paymentMethod: db.payment_method,
    paymentIcon: db.payment_icon,
    isOverdue: db.is_overdue,
    isPaid: db.is_paid,
    createdAt: db.created_at,
    updatedAt: db.updated_at,
  }
}

export function mapAsset(db: AssetDB): Asset {
  return {
    id: db.id,
    name: db.name,
    icon: db.icon,
    iconBg: db.icon_bg,
    category: db.category,
    categoryColor: db.category_color,
    project: db.project,
    projectColor: db.project_color,
    cost: db.cost,
    costPeriod: db.cost_period,
    paymentMethod: db.payment_method,
    paymentIcon: db.payment_icon,
    renewalDate: db.renewal_date,
    renewalStatus: db.renewal_status,
    renewalColor: db.renewal_color,
    status: db.status,
    statusColor: db.status_color,
    isUrgent: db.is_urgent,
    details: db.details,
    createdAt: db.created_at,
    updatedAt: db.updated_at,
  }
}