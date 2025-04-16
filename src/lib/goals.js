export async function getGoalsByStudentId({ token, studentId, apiBasePath }) {
  try {
    const studentRes = await fetch(
      `${apiBasePath}/api/v1/students/${studentId}`
    );

    if (!studentRes.ok) {
      return { success: false };
    }
    const student = await studentRes.json();

    const goalsRes = await fetch(
      `${apiBasePath}/api/v1/coachgoals/${student.coachid}`
    );
    if (!goalsRes.ok) {
      return { success: false };
    }

    const goals = await goalsRes.json();

    return { success: true, data: goals };
  } catch (e) {
    return { success: false };
  }
}

export async function getGoalsByCoachId({ token, coachId, baseApiPath }) {
  try {
    const goalsRes = await fetch(
      `${baseApiPath}/api/v1/coachgoals/${coachId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!goalsRes.ok) {
      return { success: false };
    }

    const goals = await goalsRes.json();
    return { success: true, data: goals };
  } catch (e) {
    return { success: false };
  }
}

export async function setGoals({ token, coachId, apiBasePath, goal }) {
  try {
    const goalsRes = await fetch(`${apiBasePath}/api/v1/goals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: goal,
    });
    if (!goalsRes.ok) {
      return { success: false };
    }
    return { success: true };
  } catch (e) {
    return { success: false };
  }
}
