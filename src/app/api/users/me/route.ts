import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/dbConfig/dbConnect";
import { getTokenData } from "@/helpers/getTokenDataFromToken";
import User from "@/models/userModel";

dbConnect();
export async function GET(request: NextRequest) {
  try {
    const userId = getTokenData(request);

    const user = await User.findById(userId).select("-password");

    return NextResponse.json({
      message: "User fetched successfully",
      user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
