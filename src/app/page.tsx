import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Sales Dashboard
          </h1>
          <p className="text-gray-600">
            Interactive sales analytics and visualization platform
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/dashboard"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-block"
          >
            Open Dashboard
          </Link>

          <div className="text-sm text-gray-500 pt-4 border-t border-gray-200">
            <p className="mb-2">Built with:</p>
            <div className="flex justify-center space-x-4 text-xs">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Next.js 15</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded">TypeScript</span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
