"use client"
import { authSignOut } from "@/lib/actions/authActions"

export default function SignOutButton() {
    return (
        <form action={authSignOut}>
            <button>Sign-out</button>
        </form>
    )
}
