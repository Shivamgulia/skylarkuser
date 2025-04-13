export async function setActivities({ token, apiBasePath, activity }) {
  try {
    const activityRes = await fetch(`${apiBasePath}/api/v1/activitys`, {
      method: "POST",
      ContentType: "application/json",
      body: activity,
    });
    if (!activityRes.ok) {
      return { success: false };
    }
    return { success: true };
  } catch (e) {
    return { success: false };
  }
}

export async function getActivities({ apiBasePath, studentId }) {
  try {
    const activityRes = await fetch(
      `${apiBasePath}/api/v1/studentactivitys/${studentId}`
    );
    if (!activityRes.ok) {
      return { success: false };
    }
    const activitys = await activityRes.json();
    return { success: true, data: activitys };
  } catch (e) {
    return { success: false };
  }
}

export async function getActivitiesByCoah({ apiBasePath, coachId }) {
  try {
    const activityRes = await fetch(
      `${apiBasePath}/api/v1/coachactivitys/${coachId}`
    );
    if (!activityRes.ok) {
      return { success: false };
    }
    const activitys = await activityRes.json();
    return { success: true, data: activitys };
  } catch (e) {
    return { success: false };
  }
}

export async function verifyActivity({ apiBasePath, activityIds }) {
  try {
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
  } catch (e) {
    return { success: false };
  }
}
