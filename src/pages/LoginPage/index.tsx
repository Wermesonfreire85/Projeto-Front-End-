import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Layout from '../Layout';
import AuthCard from '../../components/AuthCard';
import FormField from '../../components/FormField';

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

interface Errors { email?: string; password?: string }

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const registered = Boolean((location.state as { registered?: boolean } | null)?.registered);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!emailOk(email)) next.email = 'Informe um e-mail válido.';
    if (password.length < 6) next.password = 'A senha deve ter pelo menos 6 caracteres.';
    setErrors(next);
    // Ainda não existe back-end: com os campos válidos, apenas voltamos para a Home.
    if (Object.keys(next).length === 0) navigate('/');
  };

  return (
    <Layout>
      <AuthCard
        title="Entrar"
        subtitle="Acesse sua conta para acompanhar seus pedidos."
        footer={<>Ainda não tem conta? <Link to="/cadastro">Cadastre-se</Link></>}
      >
        {registered && <p className="auth__notice">Cadastro realizado! Entre com seu e-mail e senha.</p>}
        <form onSubmit={handleSubmit} noValidate>
          <FormField id="login-email" label="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} error={errors.email} placeholder="seuemail@exemplo.com" autoComplete="email" />
          <FormField id="login-password" label="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} error={errors.password} placeholder="Sua senha" autoComplete="current-password" />
          <Link to="/login" className="auth__link">Esqueci minha senha</Link>
          <button type="submit" className="auth__submit">Entrar</button>
        </form>
      </AuthCard>
    </Layout>
  );
}
