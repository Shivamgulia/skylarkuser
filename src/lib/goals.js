export async function getGoalsByStudentId({ token, studentId, apiBasePath }) {
  const studentRes = await fetch(`${apiBasePath}/api/v1/students/${studentId}`);

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

  return { sucess: true, data: goals };
}

export async function getGoalsByCoachId({ token, coachId, apiBasePath }) {
  const goalsRes = await fetch(`${apiBasePath}/api/v1/coachgoals/${coachid}`);
  if (!goalsRes.ok) {
    return { success: false };
  }

  const goals = await goalsRes.json();

  return { sucess: true, data: goals };
}

export async function setGoals({ token, coachId, apiBasePath, goal }) {
  const goalsRes = await fetch(`${apiBasePath}/api/v1/goals`, {
    method: "POST",
    ContentType: "application/json",
    body: goal,
  });
  if (!goalsRes.ok) {
    return { success: false };
  }
  return { success: true };
}
