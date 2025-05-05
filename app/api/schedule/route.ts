import { NextRequest, NextResponse } from "next/server";

import connectToDatabase from "@/lib/db/connection";
import Schedule from "@/app/models/schedule";

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const idERP = searchParams.get("idERP");
    const idUnidade = searchParams.get("idUnidade");

    let query = {};

    if (idERP && idUnidade) {
      query = { idERP, idUnidade };
    }

    const scheduleList = await Schedule.find(query).lean();
    // const scheduleList = await Schedule.find().lean();

    return NextResponse.json(scheduleList, { status: 200 });
  } catch (error) {
    console.error("Error fetching schedule list:", error);

    return NextResponse.json(
      { error: "Failed to fetch schedule list" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const data = await request.json();

    if (!Array.isArray(data)) {
      return NextResponse.json(
        { error: "Invalid data format. Data must be an array." },
        { status: 400 }
      );
    }

    const scheduleArr = data.map((schedule) => ({
      idSistema: schedule[0],
      dataInicio: schedule[1],
      dataFim: schedule[2],
      complexo: schedule[3],
      idUnidade: schedule[4],
      sala: schedule[5],
      versao: schedule[6],
      idioma: schedule[7],
      horario0: schedule[8],
      horario1: schedule[9],
      horario2: schedule[10],
      horario3: schedule[11],
      horario4: schedule[12],
      horario5: schedule[13],
      horario6: schedule[14],
      horario7: schedule[15],
      idHtticket: schedule[16],
      idERP: schedule[17],
      idFilme: schedule[18],
      filmeUrl: `${schedule[19]}${schedule[16]}`,
    }));

    await Schedule.deleteMany({});

    const savedSchedules = await Schedule.insertMany(scheduleArr);
    if (!savedSchedules) {
      return NextResponse.json(
        { error: "Failed to save schedules" },
        { status: 500 }
      );
    }

    return NextResponse.json(savedSchedules, { status: 201 });
  } catch (error) {
    console.error("Error creating schedule:", error);

    return NextResponse.json(
      { error: "Failed to create schedule" },
      { status: 500 }
    );
  }
}
