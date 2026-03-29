// app/(user)/about/layout.jsx
export default function AboutLayout({ children }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Hello About Layout</h1>
      {children}
    </div>
  );
}