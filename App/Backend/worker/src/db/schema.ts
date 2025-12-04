import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

// Definindo a tabela 'users' para o TypeScript entender
export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  
  // === IDENTIDADE (WEB2) ===
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(), // Hash da senha

  // === IDENTIDADE (WEB3) ===
  walletAddress: text('wallet_address').unique(),
  walletProvider: text('wallet_provider').default('system'),
  nonce: text('nonce'), // Para desafios de assinatura

  // === CONTROLE DE ACESSO (CRÍTICO) ===
  credentialStatus: text('credential_status').default('pending'), // 'active', 'revoked', 'pending'
  credentialId: text('credential_id'),
  credentialIssuedAt: integer('credential_issued_at', { mode: 'timestamp' }),

  // === PODER DE VOTO (CACHE) ===
  // Nota: SQLite armazena decimal como número ou texto.
  // Aqui usamos number para facilitar cálculos, mas cuidado com precisão absurda.
  votingPower: integer('voting_power').default(0), 
  tokenBalanceSyncedAt: integer('token_balance_synced_at', { mode: 'timestamp' }),

  // === COMPLIANCE ===
  termsAcceptedAt: integer('terms_accepted_at', { mode: 'timestamp' }),
  role: text('role').default('user'),

  // === AUDITORIA ===
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
}, (table) => {
  return {
    // Espelhando os índices que criamos no SQL
    emailIdx: index('idx_users_email').on(table.email),
    walletIdx: index('idx_users_wallet').on(table.walletAddress),
    credentialIdx: index('idx_users_credential').on(table.credentialStatus),
  };
});