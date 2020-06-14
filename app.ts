import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { encode, decode } from './shared/jwt.ts'

const router = new Router();
router
    .post("/encode", async (context) => {
        const data: any = await (await context.request.body()).value;
        context.response.body = {
            token: await encode(data)
        }
    })

    .post('/decode', async (context) => {
        const data: any = await (await context.request.body()).value;
        context.response.body = {
            data: await decode(data.token)
        }
    })


const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });