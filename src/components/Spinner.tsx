export default function Spinner() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black z-50">
      <div className="w-16 h-16 border-4 border-orange-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
