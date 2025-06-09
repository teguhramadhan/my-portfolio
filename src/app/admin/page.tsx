"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("design");
  const [projectLink, setProjectLink] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const createdAt = new Date().toISOString();

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
      // Upload gambar ke Supabase Storage
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage
        .from("portfolio-images")
        .upload(fileName, imageFile);

      if (uploadError) throw uploadError;

      // Dapatkan public URL gambar
      const { data: publicUrlData } = supabase.storage
        .from("portfolio-images")
        .getPublicUrl(fileName);

      // Simpan data portfolio ke tabel Supabase
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

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Upload Portfolio Baru</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Judul Project"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Deskripsi"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
          rows={4}
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="design">Design</option>
          <option value="coding">Coding</option>
        </select>
        <input
          type="url"
          placeholder="Link Project (optional)"
          value={projectLink}
          onChange={(e) => setProjectLink(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setImageFile(e.target.files ? e.target.files[0] : null)
          }
          className="border p-2 rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Uploading..." : "Upload Portfolio"}
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </main>
  );
}
