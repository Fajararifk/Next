"use client"

import { BeatLoader } from "react-spinners"

import { CardWrapper } from "./card-wrapper"
import { useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { newVerification } from "@/actions/new-verification"
import { FormError } from "../ui/form-error"
import { FormSuccess } from "../ui/form-success"

export const NewVerificationForm = () => {

    const [error, setError] = useState<string | undefined>()
    const [success, setSuccess] = useState<string | undefined>()
    const searchParams = useSearchParams()

    const token = searchParams.get("token")

    const onSubmit = useCallback(async () => {
        if(success || error) return 

        if(!token){
            setError("Missing token")
            return
        }
        newVerification(token).then((data) =>{
            setSuccess(data.success)
            setError(data.error)
        }).catch(() => {
            setError("Something went wrong!")
        })
    }, [token])

    useEffect(() => {
        onSubmit();
    },[onSubmit])
    return (
        <CardWrapper
            headerLabel="Conforming your verification"
            backButtonHref="/auth/login"
            backButtonLabel="Back to login">
                <div className="flex items-center w-full justify-center">
                    {!success && !error && (
                        <BeatLoader/>
                    )}
                    <FormSuccess message={success}/>
                    {!success && (
                        <FormError message={error}/>
                    )}
                </div>
        </CardWrapper>
    )
}