import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Alex Johnson", email: "alex@example.com" },
];

function UsersSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 px-6 py-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Users</h1>
          <p className="text-sm text-slate-600">Select a user to view details.</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <ul className="divide-y divide-slate-200">
            {users.map((user) => (
              <li key={user.id}>
                <Link
                  to={`/users/${user.id}`}
                  className="flex items-center justify-between gap-4 px-6 py-4 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-900">{user.name}</p>
                        <p className="truncate text-xs text-slate-600">{user.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden text-xs font-medium text-slate-500 sm:inline">ID: {user.id}</span>
                    <span className="text-sm font-semibold text-indigo-700">View</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UsersSection;
