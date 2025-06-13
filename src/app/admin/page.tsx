"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

// icons
import { RiLogoutBoxRLine } from "react-icons/ri";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("design");
  const [projectLink, setProjectLink] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [isClient, setIsClient] = useState(false);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const router = useRouter();

  const createdAt = new Date().toISOString();

  useEffect(() => {
    setIsClient(true);

    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.replace("/login");
      } else {
        setIsLoadingUser(false);
      }
    };

    checkAuth();
  }, [router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!title || !description || !type || !imageFile) {
      setMessage("Mohon isi semua field dan upload gambar");
      setLoading(false);
      return;
    }

    try {
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage
        .from("portfolio-images")
        .upload(fileName, imageFile);

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage
        .from("portfolio-images")
        .getPublicUrl(fileName);

      const { error: insertError } = await supabase.from("portfolios").insert([
        {
          title,
          description,
          type,
          image_url: publicUrlData.publicUrl,
          project_link: projectLink || null,
          created_at: createdAt,
        },
      ]);

      if (insertError) throw insertError;

      setMessage("Portfolio berhasil diupload!");
      setTitle("");
      setDescription("");
      setType("design");
      setProjectLink("");
      setImageFile(null);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage("Terjadi kesalahan tak dikenal.");
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/login");
  }

  if (!isClient || isLoadingUser) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative pb-24">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-baseline px-4 py-4 bg-[#1e1e1e] shadow-md">
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </nav>

      {/* Main Content */}
      <div className="flex justify-center items-center px-4 py-12">
        <main className="w-full max-w-xl bg-[#1e1e1e] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Upload Portfolio Baru
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Projects Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-[#2a2a2a] border border-gray-600 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-[#2a2a2a] border border-gray-600 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent"
              rows={4}
            />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="bg-[#2a2a2a] border border-gray-600 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="design">Design</option>
              <option value="coding">Coding</option>
            </select>
            <input
              type="url"
              placeholder="Link Project (optional)"
              value={projectLink}
              onChange={(e) => setProjectLink(e.target.value)}
              className="bg-[#2a2a2a] border border-gray-600 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImageFile(e.target.files ? e.target.files[0] : null)
              }
              className="bg-[#2a2a2a] border border-gray-600 text-white p-2 rounded file:mr-4 file:py-1 file:px-2 file:rounded file:border file:text-sm file:font-semibold file:border-accent file:bg-transparent file:text-white hover:file:bg-accent"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-accent text-white py-3 rounded hover:bg-accent/80 transition"
            >
              {loading ? "Uploading..." : "Upload Portfolio"}
            </button>
          </form>
          {message && <p className="mt-4 text-center">{message}</p>}
        </main>
      </div>

      {/* Logout Button - Fixed Bottom Center */}
      <div className="flex justify-center items-center">
        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-2 border border-red-600 hover:bg-red-700 transition text-red-600 px-6 py-3 rounded shadow-lg"
        >
          <RiLogoutBoxRLine /> Logout
        </button>
      </div>
    </div>
  );
}
