import Layout from '../Layout';

export default function ComingSoonPage({ title }: { title: string }) {
  return (
    <Layout>
      <div className="container" style={{ marginTop: 48 }}>
        <h1>{title}</h1>
        <p style={{ marginTop: 12 }}>Esta página ainda não faz parte dos requisitos mínimos.</p>
      </div>
    </Layout>
  );
}
