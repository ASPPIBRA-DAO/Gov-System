import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { Bindings } from './types/bindings';
import { createDb, Database } from './db';
import { success, error } from './utils/response';
import userRoutes from './routes/users';

// Definindo os tipos do Hono (Variáveis de Ambiente e Variáveis Injetadas)
type Variables = {
  db: Database;
};

type AppType = {
  Bindings: Bindings;
  Variables: Variables;
};

const app = new Hono<AppType>();

// === MIDDLEWARES GLOBAIS ===

// 1. Configuração de CORS (Permite que o Frontend acesse o Backend)
app.use('/*', cors());

// 2. Injeção de Dependência do Banco de Dados
// Em vez de criar a conexão em cada arquivo, criamos aqui e passamos adiante.
app.use(async (c, next) => {
  try {
    const db = createDb(c.env.DB);
    c.set('db', db);
    await next();
  } catch (e) {
    return error(c, 'Erro interno ao conectar no banco de dados', null, 500);
  }
});

// === ROTAS (Health Check) ===

// Rota raiz para testar se a API está viva
app.get('/', (c) => {
  return success(c, { 
    status: 'online', 
    service: 'Governance System API',
    version: '1.0.0' 
  }, 'Sistema Operacional');
});

// Rota de teste de conexão com o Banco
// Tenta buscar usuários (deve retornar lista vazia pois acabamos de criar)
app.get('/health-db', async (c) => {
  const db = c.get('db');
  
  try {
    // Busca rápida usando a query do Drizzle
    const usersList = await db.query.users.findMany({
      limit: 5,
      columns: {
        id: true,
        email: true,
        role: true
      }
    });

    return success(c, { 
      database_connection: 'ok', 
      users_found: usersList.length,
      sample: usersList
    }, 'Banco de dados conectado e respondendo');

  } catch (err: any) {
    return error(c, 'Falha ao consultar o banco', err.message, 500);
  }
});

// === ROTAS DA APLICAÇÃO ===
// Tudo que estiver em userRoutes ficará sob o prefixo /users
// Ex: POST /users/register
app.route('/users', userRoutes);

// === EXPORTAÇÃO DO WORKER ===
export default app;
