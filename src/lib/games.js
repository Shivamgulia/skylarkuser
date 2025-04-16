export async function getGames({ baseApiPath }) {
  try {
    const gameRes = await fetch(`${baseApiPath}/games`);

    if (!gameRes.ok) {
      return { success: false };
    }

    const data = await gameRes.json();

    return { success: true, data: data };
  } catch (e) {
    return { success: false };
  }
}

export async function postGame({ baseApiPath, gameData }) {
  try {
    const gameRes = await fetch(`${baseApiPath}/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: gameData,
    });

    if (!gameRes.ok) {
      return { success: false };
    }

    const data = await gameRes.json();

    return { success: true, data: data };
  } catch (e) {
    return { success: false };
  }
}
