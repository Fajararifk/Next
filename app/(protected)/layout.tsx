import { Navbar } from "./_components/navbar"

interface ProctedLayoutProps {
    children: React.ReactNode
}

const ProctedLayout = ({ children } : ProctedLayoutProps) => {
    return (
        <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))]
    from-sky-400 to-blue-800">
        <Navbar/>
            {children}
        </div>
    )
}

export default ProctedLayout