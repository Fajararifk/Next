import { Header } from "@/components/auth/header";
import { BackButton } from "@/components/auth/back-button";
import { 
    Card,
    CardContent,
    CardFooter,
    CardHeader
    
 } from "@/components/ui/card";
import { CardWrapper } from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

 export const ErrorCard = () => {
    return (
        <CardWrapper
            headerLabel="Oops! Something went wrong!"
            backButtonHref="/auth/login"
            backButtonLabel="Back to login!">
            <div className="w-full items-center flex justify-center">
                <ExclamationTriangleIcon className="text-destructive size-10"/>
            </div>
        </CardWrapper>
        // <Card className="w-[400px] shadow-md">
        //     < CardHeader>
        //         <Header label="Oops! Something went wrong!"/>
        //     </CardHeader>
        //     <CardFooter>
        //         <BackButton
        //             label="Back to login!"
        //             href="/auth/login"/>
        //     </CardFooter>
        // </Card>
    )
 }