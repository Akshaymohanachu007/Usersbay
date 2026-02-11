import { useParams, useNavigate } from "react-router-dom";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Alex Johnson", email: "alex@example.com" },
];

function SingleUserView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find(u => u.id === Number(id));

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 px-6 py-10">
        <div className="mx-auto w-full max-w-3xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">User Not Found</h2>
            <p className="mt-2 text-sm text-slate-600">We couldn’t find a user with id: {id}</p>
            <button
              type="button"
              onClick={() => navigate("/users")}
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Back to Users
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 px-6 py-10">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">User Details</h1>
            <p className="mt-1 text-sm text-slate-600">Information for the selected user.</p>
          </div>
          <button
            type="button"
            onClick={() => navigate("/users")}
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Back
          </button>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-start justify-between gap-6">
            <div className="min-w-0">
              <h2 className="truncate text-xl font-semibold text-slate-900">{user.name}</h2>
              <p className="mt-1 truncate text-sm text-slate-600">{user.email}</p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-700">
              <span className="text-base font-semibold">{String(user.name).slice(0, 1)}</span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-500">User ID</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{user.id}</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-500">Email</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleUserView;
