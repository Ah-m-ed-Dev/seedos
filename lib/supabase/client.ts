import { createClient as createSupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// ✅ تصدير باسم `createClient` (للتوافق مع الكود الحالي)
export const createClient = () => {
  return createSupabaseClient(supabaseUrl, supabaseAnonKey)
}

// ✅ تصدير باسم `supabase` (للاستخدام المباشر)
export const supabase = createSupabaseClient(supabaseUrl, supabaseAnonKey)

// ✅ تصدير افتراضي
export default supabase