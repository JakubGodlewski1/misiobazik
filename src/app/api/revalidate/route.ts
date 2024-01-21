import {NextRequest, NextResponse} from "next/server";
import {revalidatePath} from "next/cache";

export async function GET(req:NextRequest, res:NextResponse) {
   const token = req.nextUrl.searchParams.get("token")

   if (token!==process.env.NEXT_REVALIDATION_TOKEN){
      return NextResponse.json("Niepoprawny token, dane nie zostaną odświeżone", {status:401})
   }

   revalidatePath("/", "layout")
   revalidatePath("/zlobek", "page")
   revalidatePath("/przedszkole", "page")
   return NextResponse.json("Dane zostały poprawnie odświeżone")
}