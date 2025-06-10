"use client";

import Image from "next/image";
import React from "react";

interface ProfileImageProps {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  src = "/images/avatar.jpg",
  alt = "Profile Image",
  size = 150,
  className = "",
}) => {
  return (
    <div
      className={`rounded-full overflow-hidden border-2 border-dashed border-accent shadow-lg ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover w-full h-full"
        priority
      />
    </div>
  );
};

export default ProfileImage;
