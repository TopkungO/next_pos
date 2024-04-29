"use client"
import { useEffect } from "react";
import { useSession } from "next-auth/react"
import { Button, Box, Typography } from '@mui/material';
import { useRouter } from "next/navigation";

import { signOut } from "next-auth/react";

export default function Home() {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {

        if (status === "unauthenticated") {
            router.push("/")
        }
    }, [router, status])
    console.log("status",status);
    console.log("session",session);
    return (

        status === "authenticated" &&
        session.user && (
            <div>
                <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 2 }}>
                    <Typography variant="h4" gutterBottom>
                        home page
                    </Typography>


                    <div>id:{
                        session.user.id
                    }
                    </div>
                    <div>name:{session.user.name}</div>
                    <div>email:{session.user.email}</div>
                    <div>Role:{
                        session.user.role
                    }</div>


                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => signOut({ callbackUrl: "/" })}
                    >SignOut</Button>
                </Box>
            </div>
        )



    )
}