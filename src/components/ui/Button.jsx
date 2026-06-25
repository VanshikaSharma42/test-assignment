export default function Button({ children, loading }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 disabled:opacity-60"
    >
      {loading ? "Sending..." : children}
    </button>
  );
}