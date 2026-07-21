function AuthLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          {title}
        </h1>

        {children}

      </div>

    </div>
  );
}

export default AuthLayout;