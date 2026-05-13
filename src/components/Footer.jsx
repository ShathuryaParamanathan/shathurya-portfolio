import React from "react";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto max-w-6xl container-px py-10">
        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-center">
          <div className="muted text-xs">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
