"use client"

import { LogoutButton } from "@/components/auth/logout-button";
import { useCurrentUser } from "@/hooks/use-current-user"
const SettingsPage = () => {
    const user = useCurrentUser()
    return (
        <div className="bg-white p-10 rounded-xl">
            {JSON.stringify(user)}

            <form>
                <LogoutButton> Sign Out</LogoutButton>
            </form>
        </div>
    )
}

export default SettingsPage