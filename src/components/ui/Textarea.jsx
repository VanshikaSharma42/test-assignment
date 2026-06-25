export default function Textarea({
  label,
  name,
  placeholder,
  register,
  rules,
  error,
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm text-white/80">
        {label}
      </label>

      <textarea
        id={name}
        rows="5"
        placeholder={placeholder}
        {...register(name, rules)}
        className={`w-full resize-none rounded-xl border bg-white/5 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-white/35 focus:border-cyan-400 ${
          error ? "border-red-400" : "border-white/15"
        }`}
      />

      {error && <p className="text-sm text-red-400">{error.message}</p>}
    </div>
  );
}