import { Schedule } from "../types/schedule";

export const createSchedule = async (scheduleList: Schedule[]) => {
  try {
    const response = await fetch("/api/schedule/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(scheduleList),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch schedule. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching schedule", error);

    return null;
  }
};

export const getSchedule = async (idERP?: string, idUnidade?: string) => {
  try {
    const queryParams =
      idERP && idUnidade ? `?idERP=${idERP}&idUnidade=${idUnidade}` : "";

    const response = await fetch(`/api/schedule${queryParams}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch schedules. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching schedule", error);
    return null;
  }
};
