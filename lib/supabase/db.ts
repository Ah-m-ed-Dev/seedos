import { supabase } from './client'
import { 
  ProjectDB, TaskDB, ClientDB, InvoiceDB, AssetDB, SettingsDB,
  Project, Task, Client, Invoice, Asset, Settings,
  mapProject, mapTask, mapClient, mapInvoice, mapAsset
} from './types'

// ========== PROJECTS ==========
export const getProjects = async (): Promise<Project[]> => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return (data as ProjectDB[]).map(mapProject)
}

export const getProjectById = async (id: string): Promise<Project> => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) throw error
  return mapProject(data as ProjectDB)
}

export const createProject = async (project: Omit<ProjectDB, 'id' | 'created_at' | 'updated_at'>): Promise<Project> => {
  const { data, error } = await supabase
    .from('projects')
    .insert([project])
    .select()
    .single()
  
  if (error) throw error
  return mapProject(data as ProjectDB)
}

// ========== TASKS ==========
export const getTasks = async (): Promise<Task[]> => {
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return (data as TaskDB[]).map(mapTask)
}

export const createTask = async (task: Omit<TaskDB, 'id' | 'created_at' | 'updated_at'>): Promise<Task> => {
  const { data, error } = await supabase
    .from('tasks')
    .insert([task])
    .select()
    .single()
  
  if (error) throw error
  return mapTask(data as TaskDB)
}

// ========== CLIENTS ==========
export const getClients = async (): Promise<Client[]> => {
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return (data as ClientDB[]).map(mapClient)
}

export const createClient = async (client: Omit<ClientDB, 'id' | 'created_at' | 'updated_at'>): Promise<Client> => {
  const { data, error } = await supabase
    .from('clients')
    .insert([client])
    .select()
    .single()
  
  if (error) throw error
  return mapClient(data as ClientDB)
}

// ========== INVOICES ==========
export const getInvoices = async (): Promise<Invoice[]> => {
  const { data, error } = await supabase
    .from('invoices')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return (data as InvoiceDB[]).map(mapInvoice)
}

export const createInvoice = async (invoice: Omit<InvoiceDB, 'id' | 'created_at' | 'updated_at'>): Promise<Invoice> => {
  const { data, error } = await supabase
    .from('invoices')
    .insert([invoice])
    .select()
    .single()
  
  if (error) throw error
  return mapInvoice(data as InvoiceDB)
}

// ========== ASSETS ==========
export const getAssets = async (): Promise<Asset[]> => {
  const { data, error } = await supabase
    .from('assets')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return (data as AssetDB[]).map(mapAsset)
}

export const createAsset = async (asset: Omit<AssetDB, 'id' | 'created_at' | 'updated_at'>): Promise<Asset> => {
  const { data, error } = await supabase
    .from('assets')
    .insert([asset])
    .select()
    .single()
  
  if (error) throw error
  return mapAsset(data as AssetDB)
}