"use client";

import { useState, useRef } from "react";
import { createClient } from "@/lib/supabase/client";

interface Props {
  bucket: string;
  onUpload: (url: string) => void;
  currentUrl?: string;
}

export default function ImageUploader({ bucket, onUpload, currentUrl }: Props) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(currentUrl ?? "");
  const inputRef = useRef<HTMLInputElement>(null);
  const supabase = createClient();

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const ext = file.name.split(".").pop();
    const path = `${Date.now()}.${ext}`;

    const { error } = await supabase.storage.from(bucket).upload(path, file);
    if (error) {
      alert("Chyba při nahrávání: " + error.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from(bucket).getPublicUrl(path);
    setPreview(data.publicUrl);
    onUpload(data.publicUrl);
    setUploading(false);
  };

  return (
    <div>
      {preview && (
        <div className="mb-2 aspect-video w-full max-w-xs overflow-hidden rounded-lg border border-border bg-surface">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={preview} alt="Preview" className="h-full w-full object-cover" />
        </div>
      )}
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:bg-surface-light disabled:opacity-50"
      >
        {uploading ? "Nahrávání..." : "Nahrát obrázek"}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="hidden"
      />
    </div>
  );
}
