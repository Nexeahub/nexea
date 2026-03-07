import Image from "next/image";

export default function FeaturesGrid() {
  const features = [
    {
      title: "AI Product Description Generator",
      desc: "Instantly create engaging product content.",
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&auto=format",
    },
    {
      title: "SEO Optimization",
      desc: "Improve visibility across marketplaces.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format",
    },
    {
      title: "Multi-Store Management",
      desc: "Publish and sync products on multiple stores.",
      img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=400&auto=format",
    },
    {
      title: "Sales & Analytics Dashboard",
      desc: "Insights on sales, orders, and customer behavior.",
      img: "https://images.unsplash.com/photo-1551288049-bbda48658a7d?w=400&auto=format",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="text-orange-600 text-xs font-bold uppercase tracking-widest">
          • Key Features
        </span>
        <h2 className="mt-4 mb-16 text-3xl font-bold lg:text-4xl text-slate-900">
          Everything You Need in One Platform
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all hover:shadow-xl"
            >
              <div className="mb-6 h-48 overflow-hidden rounded-xl bg-slate-100">
                {/* <Image
                  height={30}
                  width={40}
                  src={f.img}
                  alt={f.title}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                /> */}
              </div>
              <div className="text-left px-4 pb-4">
                <h3 className="font-bold text-lg text-slate-900">{f.title}</h3>
                <p className="text-slate-500 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
