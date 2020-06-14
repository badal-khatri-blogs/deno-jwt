import { validateJwt } from "https://deno.land/x/djwt/validate.ts"
import { makeJwt, setExpiration, Jose, Payload } from "https://deno.land/x/djwt/create.ts"

const key = "your-secret"

export const encode = async (data: any) => {
    const payload: Payload = {
        ...data
    }
    const header: Jose = {
        alg: "HS256",
        typ: "JWT",
    }

    return makeJwt({ header, payload, key })
}

export const decode = async (jwt: string) => {
    const data = await validateJwt(jwt, key, { isThrowing: false })
    return data?.payload
}