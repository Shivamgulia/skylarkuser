export async function getGames({ baseApiPath }) {
  const gameRes = await fetch(`${baseApiPath}/games`);

  if (!gameRes.ok) {
    return { success: false };
  }

  const data = await gameRes.json();

  return { success: true, data: data };
}

export async function postGame({ baseApiPath, gameData }) {
  const gameRes = await fetch(`${baseApiPath}/games`, {
    method: "POST",
    ContentType: "application/json",
    body: gameData,
  });

  if (!gameRes.ok) {
    return { success: false };
  }

  const data = await gameRes.json();

  return { success: true, data: data };
}
