import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data: {
        secret: string
    } = await req.json();

    if (!data.secret){
        return NextResponse.json({
            err: true,
            msg: "Bad Request",
            on: Date.now()
        },{
            status: 400
        })
    }
    if (data.secret === process.env.FLUSH_SECRET) {
        revalidateTag("blog_index");
        return NextResponse.json({
            error: false,
            msg: "Server Cache Flushed",
            on: Date.now()
        }, {
            status: 200
        })
    }else{
        return NextResponse.json({
            err: true,
            msg: "Wrong Credentials",
            on: Date.now()
        },{
            status: 401
        })
    }
}