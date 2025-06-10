// components/MyDockWrapper.tsx
"use client";

import { useRouter } from "next/navigation";
import Dock from "./Components/Dock/Dock"; // pastikan ini sudah client
import { HomeIcon, SettingsIcon } from "lucide-react";

export default function MyDockWrapper() {
  const router = useRouter();

  return (
    <Dock
      items={[
        {
          icon: <HomeIcon />,
          label: "Home",
          onClick: () => router.push("/home"),
        },
        {
          icon: <SettingsIcon />,
          label: "Settings",
          onClick: () => alert("Clicked Settings"),
        },
      ]}
    />
  );
}
