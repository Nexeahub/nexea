"use client";

export default function Footer() {
  return (
    <footer className="bg-white py-10 px-5 mt-20 border-t">
      <div className="max-w-6xl mx-auto text-center text-gray-600">
        <p>© {new Date().getFullYear()} Nexa. All rights reserved.</p>
        <p className="mt-2">
          Contact us on{" "}
          <a
            href="https://wa.me/2348100000000"
            target="_blank"
            className="text-blue-600"
          >
            WhatsApp
          </a>
        </p>
      </div>
    </footer>
  );
}
