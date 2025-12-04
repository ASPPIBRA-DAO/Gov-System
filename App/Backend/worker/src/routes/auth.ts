import { Hono } from 'hono';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import { Database } from '../db'; // <--- Mudamos de 'db' para o TIPO 'Database'
import { users } from '../db/schema';
import { eq } from 'drizzle-orm';

// Definimos o que esperar do Contexto (Variáveis e Env)
type Variables = {
  db: Database;
};

type Bindings = {
  JWT_SECRET: string;
};

// Avisamos ao Hono que essas variáveis existem
const auth = new Hono<{ Bindings: Bindings; Variables: Variables }>();

auth.post('/login', async (c) => {
  try {
    // 1. Pegamos o banco de dados INJETADO pelo index.ts
    const db = c.get('db'); 

    const { email, password } = await c.req.json();

    if (!email || !password) {
      return c.json({ error: 'Email e senha são obrigatórios' }, 400);
    }

    console.log(`Tentativa de login para: ${email}`);

    // 2. Agora usamos o 'db' que pegamos do contexto
    const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
    const user = result[0];

    if (!user) {
      return c.json({ error: 'Credenciais inválidas' }, 401);
    }

    const isValid = await compare(password, user.password);

    if (!isValid) {
      return c.json({ error: 'Credenciais inválidas' }, 401);
    }

    const accessToken = sign(
      { 
        userId: user.id, 
        email: user.email,
        role: 'user' 
      },
      c.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    return c.json({ 
      accessToken, 
      user: { 
        id: user.id, 
        email: user.email 
      } 
    });

  } catch (error) {
    console.error('Erro no login:', error);
    return c.json({ error: 'Erro interno no servidor' }, 500);
  }
});

export default auth;