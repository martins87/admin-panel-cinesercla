import { Schedule } from "../types/schedule";

export const createSchedule = async (scheduleList: Schedule[]) => {
  try {
    const response = await fetch("/api/schedule/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(scheduleList),
    });

    if (!response.ok) {
      throw new Error(`Failed to create schedule. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log("Error creating schedule", error);

    return null;
  }
};
