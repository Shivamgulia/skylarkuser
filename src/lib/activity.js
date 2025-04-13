export async function setActivities({ token, apiBasePath, activity }) {
  const activityRes = await fetch(`${apiBasePath}/api/v1/activitys`, {
    method: "POST",
    ContentType: "application/json",
    body: activity,
  });
  if (!activityRes.ok) {
    return { success: false };
  }
  return { success: true };
}

export async function getActivities({ apiBasePath, studentId }) {
  const activityRes = await fetch(
    `${apiBasePath}/api/v1/studentactivitys/${studentId}`
  );
  if (!activityRes.ok) {
    return { success: false };
  }
  const activitys = await activityRes.json();
  return { success: true, data: activitys };
}

export async function getActivitiesByCoah({ apiBasePath, coachId }) {
  const activityRes = await fetch(
    `${apiBasePath}/api/v1/coachactivitys/${coachId}`
  );
  if (!activityRes.ok) {
    return { success: false };
  }
  const activitys = await activityRes.json();
  return { success: true, data: activitys };
}

export async function verifyActivity({ apiBasePath, activityIds }) {
  const activityRes = await fetch(
    `${apiBasePath}/api/v1/verfiyactivity/${coachId}`,
    {
      method: "PUT",
      ContentType: "application/json",
      body: { activityIds: activityIds },
    }
  );
  if (!activityRes.ok) {
    return { success: false };
  }
  const activitys = await activityRes.json();
  return { success: true, data: activitys };
}
