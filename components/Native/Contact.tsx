"use client"
import React from "react";
import ProfileCard from "../ProfileCard";

export default function Contact() {
  return (
    <div className="py-40">
      <ProfileCard
        name="Zintarh C. Jonathan"
        title="Software Engineer(kateberryd@gmail.com)"
        showBehindGradient={true}
        handle="zintarh_dev"
        contactText="Contact Me"
        avatarUrl="/path/to/avatar.jpg"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => window.open("https://x.com/zintarh_dev", "_blank")}
      />
    </div>
  );
}
