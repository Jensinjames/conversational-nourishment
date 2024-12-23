export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Activity: {
        Row: {
          Action: string
          Details: Json
          ID: string
          Source: string
          Status: string
          Timestamp: string
          User: string
        }
        Insert: {
          Action: string
          Details: Json
          ID: string
          Source: string
          Status: string
          Timestamp: string
          User: string
        }
        Update: {
          Action?: string
          Details?: Json
          ID?: string
          Source?: string
          Status?: string
          Timestamp?: string
          User?: string
        }
        Relationships: []
      }
      comments: {
        Row: {
          content: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      conversation_history: {
        Row: {
          agent_response: string
          conversation_id: string
          id: string
          metadata: Json | null
          timestamp: string | null
          user_message: string
        }
        Insert: {
          agent_response: string
          conversation_id: string
          id?: string
          metadata?: Json | null
          timestamp?: string | null
          user_message: string
        }
        Update: {
          agent_response?: string
          conversation_id?: string
          id?: string
          metadata?: Json | null
          timestamp?: string | null
          user_message?: string
        }
        Relationships: []
      }
      conversational_history: {
        Row: {
          created_at: string
          id: number
          message: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: never
          message: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: never
          message?: string
          user_id?: string
        }
        Relationships: []
      }
      menu_cache: {
        Row: {
          id: string
          last_updated: string | null
          menu_data: Json
          metadata: Json | null
        }
        Insert: {
          id?: string
          last_updated?: string | null
          menu_data: Json
          metadata?: Json | null
        }
        Update: {
          id?: string
          last_updated?: string | null
          menu_data?: Json
          metadata?: Json | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          bio: string | null
          created_at: string
          display_name: string | null
          id: number
          user_id: string
        }
        Insert: {
          bio?: string | null
          created_at?: string
          display_name?: string | null
          id?: never
          user_id: string
        }
        Update: {
          bio?: string | null
          created_at?: string
          display_name?: string | null
          id?: never
          user_id?: string
        }
        Relationships: []
      }
      toast_configuration: {
        Row: {
          access_token: string | null
          client_id: string
          client_secret: string
          created_at: string | null
          id: string
          refresh_token: string | null
          restaurant_id: string
          token_expires_at: string | null
          updated_at: string | null
        }
        Insert: {
          access_token?: string | null
          client_id: string
          client_secret: string
          created_at?: string | null
          id?: string
          refresh_token?: string | null
          restaurant_id: string
          token_expires_at?: string | null
          updated_at?: string | null
        }
        Update: {
          access_token?: string | null
          client_id?: string
          client_secret?: string
          created_at?: string | null
          id?: string
          refresh_token?: string | null
          restaurant_id?: string
          token_expires_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      verification_codes: {
        Row: {
          attempts: number | null
          created_at: string | null
          expires_at: string | null
          id: string
          phone_number: string
          verification_code: string
          verified: boolean | null
        }
        Insert: {
          attempts?: number | null
          created_at?: string | null
          expires_at?: string | null
          id?: string
          phone_number: string
          verification_code: string
          verified?: boolean | null
        }
        Update: {
          attempts?: number | null
          created_at?: string | null
          expires_at?: string | null
          id?: string
          phone_number?: string
          verification_code?: string
          verified?: boolean | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      count_total_users: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      get_active_and_max_connections: {
        Args: Record<PropertyKey, never>
        Returns: {
          active_connections: number
          max_connections: number
        }[]
      }
      get_user_profile: {
        Args: {
          user_id: number
        }
        Returns: {
          id: number
          username: string
          email: string
          created_at: string
        }[]
      }
      sms_authenticate_user: {
        Args: {
          phone_number: string
          shortcode: string
        }
        Returns: string
      }
      update_user_email: {
        Args: {
          user_id: number
          new_email: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
