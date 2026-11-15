import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../Layout';
import AuthCard from '../../components/AuthCard';
import FormField from '../../components/FormField';

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

interface Form { name: string; email: string; password: string; confirm: string }
type Errors = Partial<Record<keyof Form | 'terms', string>>;

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<Form>({ name: '', email: '', password: '', confirm: '' });
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const update = (field: keyof Form) => (e: ChangeEvent<HTMLInputElement>) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (form.name.trim().length < 3) next.name = 'Informe seu nome completo.';
    if (!emailOk(form.email)) next.email = 'Informe um e-mail válido.';
    if (form.password.length < 6) next.password = 'A senha deve ter pelo menos 6 caracteres.';
    if (form.confirm !== form.password) next.confirm = 'As senhas não são iguais.';
    if (!terms) next.terms = 'É preciso aceitar os termos para continuar.';
    setErrors(next);
    // Ainda não existe back-end: com tudo válido, seguimos para o login.
    if (Object.keys(next).length === 0) navigate('/login', { state: { registered: true } });
  };

  return (
    <Layout>
      <AuthCard
        title="Cadastre-se"
        subtitle="Crie sua conta na Digital Store."
        footer={<>Já tem conta? <Link to="/login">Entrar</Link></>}
      >
        <form onSubmit={handleSubmit} noValidate>
          <FormField id="reg-name" label="Nome completo" value={form.name} onChange={update('name')} error={errors.name} placeholder="Seu nome" autoComplete="name" />
          <FormField id="reg-email" label="E-mail" type="email" value={form.email} onChange={update('email')} error={errors.email} placeholder="seuemail@exemplo.com" autoComplete="email" />
          <FormField id="reg-password" label="Senha" type="password" value={form.password} onChange={update('password')} error={errors.password} placeholder="Mínimo de 6 caracteres" autoComplete="new-password" />
          <FormField id="reg-confirm" label="Confirmar senha" type="password" value={form.confirm} onChange={update('confirm')} error={errors.confirm} placeholder="Repita a senha" autoComplete="new-password" />
          <div>
            <label className="auth__check">
              <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} />
              Li e aceito os termos de uso
            </label>
            {errors.terms && <p role="alert" className="field__error" style={{ marginTop: 8 }}>{errors.terms}</p>}
          </div>
          <button type="submit" className="auth__submit">Criar conta</button>
        </form>
      </AuthCard>
    </Layout>
  );
}
