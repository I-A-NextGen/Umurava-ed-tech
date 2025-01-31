import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  const user = false;
  if (user) {
    redirect("/app//dashboard/user");
  } else {
    redirect("/app//dashboard/admin");
  }
};

export default page;
