"use client"
import { redirect, useParams } from 'next/navigation';
import React from 'react'

const page = ({}) => {
    const userRole = "user"
    const { challengeid } = useParams();
    if(challengeid !== "challenge") {
        return (
            <div className="grid size-full min-h-screen place-items-center text-3xl font-bold text-umurava">
                Challenge not found
            </div>
        )
    }
    if(challengeid === "challenge" && userRole !== "user") {
        redirect("/app/dashboard/challenge/edit")
    }
}

export default page