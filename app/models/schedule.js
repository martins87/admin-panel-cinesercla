import mongoose, { Schema } from "mongoose";

const scheduleSchema = new Schema(
  {
    idSistema: String,
    dataInicio: String,
    dataFim: String,
    complexo: String,
    idUnidade: String,
    sala: String,
    versao: String,
    idioma: String,
    horario0: String,
    horario1: String,
    horario2: String,
    horario3: String,
    horario4: String,
    horario5: String,
    horario6: String,
    horario7: String,
    idHtticket: String,
    idERP: String,
    idFilme: String,
    filmeUrl: String,
  },
  { timestamps: true, collection: "schedule" }
);

const Schedule =
  mongoose.models.Schedule || mongoose.model("Schedule", scheduleSchema);

export default Schedule;
