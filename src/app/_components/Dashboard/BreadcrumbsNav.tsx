"use client";
import Link from "next/link";
import React from "react";

const BreadcrumbsNav = ({
  routes,
}: {
  routes: Array<{ label: string; link: string }>;
}) => {
  const linkLabels = routes
    .map((route) => route.label)
    .join(" /, ")
    .split(",");
  return (
    <div className="flex max-md:flex-col max-md:items-start items-center gap-2">
      {linkLabels.map((label, index) => (
        <Link
          key={index}
          className={`${index === routes.length - 1 ? "text-umurava" : ""} flex flex-row items-center text-sm hover:text-umurava`}
          href={routes[index]!.link}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default BreadcrumbsNav;
