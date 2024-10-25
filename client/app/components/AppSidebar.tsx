"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { IoGrid } from "react-icons/io5";
import { BiTask } from "react-icons/bi";
import { MdOutlinePendingActions } from "react-icons/md";
import { BsStopwatchFill } from "react-icons/bs";
// import { Header } from "./Header";

const items = [
    {
        title: "All",
        url: "/",
        icon: <IoGrid />,
    },
    {
        title: "Completed",
        url: "/completed",
        icon: <BiTask />,
    },
    {
        title: "Pending",
        url: "/pending",
        icon: <MdOutlinePendingActions />,
    },
    {
        title: "Overdue",
        url: "/overdue",
        icon: <BsStopwatchFill />,
    },
]


export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarHeader>
                        {/* <Header /> */}
                    </SidebarHeader>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu >
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <div>{item.icon}{item.title}</div>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
