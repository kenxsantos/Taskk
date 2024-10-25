"use client";
import { AppSidebar } from "@/app/components/AppSidebar";
import { useUserContext } from "@/context/userContext";
import React from "react";

function SidebarProvider() {
    const userId = useUserContext().user._id;
    return <>{userId && <AppSidebar />}</>;
}

export default SidebarProvider;