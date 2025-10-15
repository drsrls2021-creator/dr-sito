import Container from "../ui/Container";
export default function PageHeader({ title, subtitle }) {
  return (
    // Usa 'bg-light' dal tuo tailwind.config.js
    <div className="bg-light py-16 sm:py-24">
      <Container className="text-center">
        {/* Usa 'text-primary-dark' dal tuo tailwind.config.js */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary-dark">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg text-dark max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </Container>
    </div>
  );
}